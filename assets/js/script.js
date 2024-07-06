// Check screen resize add menu toggle
const menuResponsive = document.getElementById('menuRespon');
const menuBurActive = document.getElementById('headtop-burger');
function menuRespon() {
  if (window.innerWidth < 720) {
    menuResponsive.classList.add('tl-headtop-menu-respon');
    menuBurActive.style.display = 'block';
  } else {
    menuResponsive.classList.remove('tl-headtop-menu-respon');
    menuBurActive.style.display = 'none';
  }

  return(menuRespon, menuBurActive);
}



menuRespon(); 
window.addEventListener('resize', menuRespon); // Us function screen resize always

// Headtop menu Burger active toggle
menuBurActive.addEventListener('click', function() {
  menuBurActive.classList.toggle('tl-headtop-bur-active');
  menuResponsive.classList.toggle('tl-headtop-toggle');
});




// ======================== Slick Slider ========================
// ------------ Slider ------------
$('.tl-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// ------------ Top Product Slider ------------
$('.tl-topprd-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });