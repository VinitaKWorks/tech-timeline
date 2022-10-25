window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.timeline');
  for (var i = 0; i < reveals.length; i++){
    var win_height = window.innerHeight;
    var reveal_top = reveals[i].getBoundingClientRect().top;
    var reveal_point = 150;
    if (reveal_top < win_height - reveal_point) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}