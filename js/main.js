$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });
  
  var menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener('click', function() {
    document.querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
  });
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)
  
  function openModal() {
    var modalOverlay = $(".modal__overlay")
    var modalDialog = $(".modal__dialog")
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay")
    var modalDialog = $(".modal__dialog")
    modalOverlay.removeClass("modal__overlay--visible")
    modalDialog.removeClass("modal__dialog--visible")
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      "rules": {
        name: {
          minlength: 2
        },
        phone: {
          minlength: 16
        }
      },
      "messages": {
        name: {
          required: "Name is required",
          minlength: "Name must not be shorter than 2 letters"
        },
        email: {
          required: "We need tour email to contact you",
          email: "Your email must be format name@domain.com"
        },
        phone: {
          required: "Phone number is required",
          minlength: "Phone number must be have 11 number"
        }
      },
    });
  })
  AOS.init();
});