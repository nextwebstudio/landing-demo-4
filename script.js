// Anno footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Slider
const track = document.querySelector('.slider__track');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');
if (track && prev && next){
  const scrollBy = () => Math.min(560, track.clientWidth*0.8);
  prev.addEventListener('click', ()=> track.scrollBy({left:-scrollBy(), behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left: scrollBy(), behavior:'smooth'}));
}

// Lead form (demo): mostra link download dopo "invio"
function handleLead(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const ok  = e.target.querySelector('.form__success');
  const link= document.getElementById('downloadLink');

  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Invio…';

  // PDF demo pubblico (placeholder)
  const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  setTimeout(()=>{
    link.href = pdfUrl;
    ok.hidden = false;
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-file-arrow-down"></i> Invia e Scarica';
    // scroll a messaggio successo
    ok.scrollIntoView({behavior:'smooth', block:'center'});
  }, 900);
  return false;
}
window.handleLead = handleLead;
