

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
  loop: true,
  items: 1,
  touchDrag:true,
  mouseDrag:true,
});
let prevButton = document.querySelectorAll('.owl-prev');
let nextButton = document.querySelectorAll('.owl-next');
document.addEventListener('keydown', function(KeyboardEvent) {
  if (KeyboardEvent.keyCode == '37') {
    prevButton.forEach(function(element) {
      element.click();
    });
  } else if (KeyboardEvent.keyCode == '39') {
    nextButton.forEach(function(element) {
      element.click();
    });
  }
});


// document.addEventListener("DOMContentLoaded", function() {
//   let prevButton = document.querySelector(".owl-prev");
//   let nextButton = document.querySelector(".owl-next");
//   let imageElements = document.querySelectorAll(".itemImg img");

//   prevButton.addEventListener("click", function() {
//     for (let i = 0; i < imageElements.length; i++) {
//       if (imageElements[i].hasAttribute("hidden")) {
//         imageElements[i].removeAttribute("hidden");
//       }
//     }
//   });

//   nextButton.addEventListener("click", function() {
//     for (let i = imageElements.length - 1; i >= 0; i--) {
//       if (imageElements[i].hasAttribute("hidden")) {
//         imageElements[i].removeAttribute("hidden");
//       }
//     }
//   });
// });\




let prevButtons = document.querySelectorAll(".owl-prev");
let nextButtons = document.querySelectorAll(".owl-next");

prevButtons.forEach(function(prevButton) {
  prevButton.addEventListener("click", function() {
    let modalContent = this.closest(".modal-content");
    let imageElements = modalContent.querySelectorAll(".itemImg");
    let currentIndex = Array.from(imageElements).findIndex(function(imageElement) {
      return !imageElement.hasAttribute("hidden");
    });

    if (currentIndex > 0) {
      imageElements[currentIndex].setAttribute("hidden", "true");
      imageElements[currentIndex - 1].removeAttribute("hidden");
    }
  });
});

nextButtons.forEach(function(nextButton) {
  nextButton.addEventListener("click", function() {
    let modalContent = this.closest(".modal-content");
    let imageElements = modalContent.querySelectorAll(".itemImg");
    let currentIndex = Array.from(imageElements).findIndex(function(imageElement) {
      return !imageElement.hasAttribute("hidden");
    });

    if (currentIndex < imageElements.length - 1) {
      imageElements[currentIndex].setAttribute("hidden", "true");
      imageElements[currentIndex + 1].removeAttribute("hidden");
    }
  });
});