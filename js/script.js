var hel = "ope mohajon"
console.log(hel)









$('.jfalfal_slick').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
    ]
  });