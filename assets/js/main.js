$('.customers1').slick({
    dots: false, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    speed:800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.customers').slick({
    dots: false, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    speed:800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
/* Demo purposes only */

let count = 1; // Starting number
const maxCount = 20; // Ending number
const display = document.getElementById('number');

function updateCount() {
    if (count <= maxCount) {
        display.textContent = count;
        count++;
    }
}



// Update count every second (1000 milliseconds)
setInterval(updateCount, 100);