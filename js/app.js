

async function sendForm(form) {
    let responce = await fetch("php/obr.php", {
    method: "POST",
    body: new FormData(form),
    });
    let result = await responce.text();

    if (result == "ok") {
      alert("Отзыв отправлен!");
    } else if (result == "exist") {
      info.innerText = "Вы уже отправляли отзыв!";
    }
  }


// window.onload = function()
// {
// if (window.jQuery)
// {
// alert('jQuery is loaded');
// }
// else
// {
// alert('jQuery is not loaded');
// }
// }


$('.owl-carousel').owlCarousel({
  nav: true,
  navElement: 'button',
  navText: ['<i class="fa fa-angle-left"></i>', '  <i class="fa fa-angle-right"></i>'],
  center: true,
  loop: true,
  items: 1,
  // lazyLoad:true,
  touchDrag:true,
  mouseDrag:true,
  mergeFit:true,
  // lazyLoadEager: true,
});


document.addEventListener('keydown', function(KeyboardEvent) {
  let prev = document.querySelectorAll('.owl-prev');
  let next = document.querySelectorAll('.owl-next');
  if (KeyboardEvent.keyCode == '37') {
    prev.forEach(function(element) {
      element.click();
    });
  } else if (KeyboardEvent.keyCode == '39') {
    next.forEach(function(element) {
      element.click();
    });
  }
});

// $('.portfolio-item').click(function() {
//   var imageSource = $(this).find('img').attr('src');
//   $('#modalImage').attr('src', imageSource);
//   $('#myModal').modal('show');
// });
// var url = '';
 
// $(document).ready(function() {
//     $('#container').html(`<img src='${url}'>`);
// });
// let pic1 = '/img/item1/1.jpg';
// let pic2 = '/img/item1/2.jpg';
// document.getElementById('item1').onclick = function() {
//   document.getElementsById('itemPic1').src = pic1;
// }