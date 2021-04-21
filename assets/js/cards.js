// Show more Show less buttons


var box = document.querySelector('#history-cards');

box.addEventListener('click', function(event) {
  var target = event.target; 
  if (target.classList.contains('btn')) {       
    var boxBody = target.parentNode;
    var open = target.dataset.open === 'true';
    target.dataset.open = !open;
    if (open) {
      target.innerText = 'Show more';
      boxBody.classList.remove('open');
    } else {
      target.innerText = 'Show less';
      boxBody.classList.add('open');
    }
  }  
});