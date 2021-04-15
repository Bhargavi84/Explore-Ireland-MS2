// Read more Read less buttons


var cards = document.querySelector('#history-cards');

cards.addEventListener('click', function(e) {
  var target = e.target; 
  if (target.classList.contains('btn')) {       
    var cardBody = target.parentNode;
    var open = target.dataset.open === 'true';
    target.dataset.open = !open;
    if (open) {
      target.innerText = 'Show more';
      cardBody.classList.remove('open');
    } else {
      target.innerText = 'Show less';
      cardBody.classList.add('open');
    }
  }  
});