
$(".burger-wrap").click(function () {
    $(".header_wrap").toggleClass("header_wrap--open");
    $(".burger").toggleClass('burger--close');
});
$(".main_sidebar-burger").click(function () {
    $(".main_sidebar").toggleClass("main_sidebar--open");
    $(".main_sidebar-burger").toggleClass('main_sidebar-burger--open');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});
