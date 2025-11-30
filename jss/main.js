document.addEventListener('DOMContentLoaded',function(){
  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
  // simple form confirmation
  const form=document.getElementById('regForm');
  if(form){
    form.addEventListener('submit', function(e){
      setTimeout(function(){
        alert('Děkujeme — přihláška odeslána. Zkontrolujte e-mail pro instrukce.');
      }, 200);
    });
  }
});
