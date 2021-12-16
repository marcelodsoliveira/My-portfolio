 // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#mainBanner').parallax({imageSrc: 'images/banner4.jpg'});
  }, 200);

  // Scroll das seções

  let navBtn = $('.nav-item');
  let bannerSection = $('#mainBanner');
  let aboutSection = $('#about-area');
  let educSection = $('#my-education');
  let xpSection = $('#my-experience');
  let devSection = $('#programming-area');
  let portfolioSection = $('#projects-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if (btnId == 'education-menu') {
      scrollTo = educSection;    
    } else if (btnId == 'experience-menu') {
      scrollTo = xpSection;
    } else if (btnId == 'portfolio-menu') {
      scrollTo = devSection;
    } else if (btnId == 'projects-area') {
      scrollTo = portfolioSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1500);

  });

  // Ocultando botão hamburguer em mobile devices após click nas seções

  jQuery(document).ready(function() {
    jQuery(".navbar-nav a").click(function(event) {
        event.preventDefault();
        jQuery(".navbar-collapse").collapse('hide');
    });
});