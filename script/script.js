// testimonial slider

$(".testimonial__testimony__list").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".testimony__experts__list",
});
$(".testimony__experts__list").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".testimonial__testimony__list",
  dots: false,
  centerMode: true,
});

$(".testimony__experts__list").on("click", ".slick-slide", function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data("slick-index");

  $(".testimonial__testimony__list").slick("slickGoTo", goToSingleSlide);
});

//success students slider
$(".success__student__list").slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  autoPlay: true,
  autoplay: 300,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      setting: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
});
