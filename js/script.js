$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 768,
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
            }]
      });
      $(".specialities").slick({
        dots: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }]
      });
})