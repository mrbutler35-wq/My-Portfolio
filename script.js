// Small script to enable mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(!toggle || !links) return;
  toggle.addEventListener('click', function(){
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      links.style.display = 'block';
    } else {
      links.style.display = 'none';
    }
  });
  // ensure correct initial state on resize
  window.addEventListener('resize', function(){
    if(window.innerWidth > 980){
      links.style.display = '';
      toggle.setAttribute('aria-expanded','false');
    } else if(toggle.getAttribute('aria-expanded') === 'false'){
      links.style.display = 'none';
    }
  });
});
