$(document).ready(function(){

  $('.testimonial-block').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.news-block').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.latest-news').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.business-step').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 5,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.square-tab-content-list').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.visitor-guide-slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.career-slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
  $('.environment-slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });

  $('.loader-wrapper').fadeOut();

  if ($(window).scrollTop() > 100) {
      $('header').addClass('fixed');
      $('.search-block').addClass('fixed');
  }else{
      $('header').removeClass('fixed');
      $('.search-block').removeClass('fixed');
  }

  //Foo Table
  $('.table-style1').footable();
  
  $(document).on('click','.table-style1 tr[data-expanded!="true"]',function(){
	  $('.table-style1 tr[data-expanded="true"]').trigger('click');
  });

  $('.table-style2').footable();
  
  $(document).on('click','.table-style2 tr[data-expanded!="true"]',function(){
    $('.table-style2 tr[data-expanded="true"]').trigger('click');
  });

  $('.table-style3').footable();
  
  $(document).on('click','.table-style3 tr[data-expanded!="true"]',function(){
    $('.table-style3 tr[data-expanded="true"]').trigger('click');
  });

  $('.table-style4').footable();
  
  $(document).on('click','.table-style4 tr[data-expanded!="true"]',function(){
    $('.table-style4 tr[data-expanded="true"]').trigger('click');
  });


  // $(".map-list-block").mCustomScrollbar();
  
  $('.tab-icon-list .tab-icon-content').eq( 0 ).show();
  
  $(document).on('click', '.tab-icon-list .tab-icon .tablinks', function(){
    var step_id = $(this).data('id');

    $('.tab-icon-list .tab-icon .tablinks').removeClass('active');
    $('.tab-icon-list .tab-icon-content').removeClass('active');
	
	  $('.tab-icon-list .tab-icon-content').hide();
	
    $(this).addClass('active');
    $('#'+step_id).addClass('active');
	
	  $('#'+step_id).fadeIn(500);
	
	  matchHeightInvestWhy();
  });

  $('.square-tab .square-tab-content').eq( 0 ).show();
  $(document).on('click', '.square-tab-list .square-tab-box', function(){
    var step_id = $(this).data('id');

    $('.square-tab-list .square-tab-box').removeClass('active');
    $('.square-tab .square-tab-content').removeClass('active');
  
    $('.square-tab .square-tab-content').hide();
  
    $(this).addClass('active');
    $('#'+step_id).addClass('active');
  
    $('#'+step_id).fadeIn(500);

    $('.square-tab-content-list').slick('destroy');
    $('.square-tab-content-list').slick('init');

    squareTabHeight();

  });

  $('.tenders-block .tenders-tabs-content').eq( 0 ).show();
  
  $(document).on('click', '.tenders-block .tenders-tabs .tab-link', function(){
    var step_id = $(this).data('id');

    $('.tenders-block .tenders-tabs .tab-link').removeClass('active');
    $('.tenders-block .tenders-tabs-content').removeClass('active');
  
    $('.tenders-block .tenders-tabs-content').hide();
  
    $(this).addClass('active');
    $('#'+step_id).addClass('active');
  
    $('#'+step_id).fadeIn(500);
  });

  $('.profile-steps .profile-step-content').eq( 0 ).show();
  
  $(document).on('click', '.profile-steps .profile-steps-list .tablinks', function(){
    var step_id = $(this).data('id');

    $('.profile-steps .profile-steps-list .tablinks').removeClass('active');
    $('.profile-steps .profile-step-content').removeClass('active');
  
    $('.profile-steps .profile-step-content').hide();
  
    $(this).addClass('active');
    $('#'+step_id).addClass('active');
  
    $('#'+step_id).fadeIn(500);
  });

  $('.show-more').on('click', function(){
    $(this).parent().find('.show-more-cn').slideToggle();
    $(this).text($(this).html() == 'Show More' ? 'Show Less' : 'Show More');
  });

  $('#DateOfBirth').datepicker({ format: 'dd/mm/yyyy' });

  // var $window = $(window);    //Window object
  // var scrollTime = 1.5;     //Scroll time
  // var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
  // $window.on("mousewheel DOMMouseScroll", function(event){
  //   event.preventDefault();
  //   var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
  //   var scrollTop = $window.scrollTop();
  //   var finalScroll = scrollTop - parseInt(delta*scrollDistance);
  //   TweenMax.to($window, scrollTime, {
  //     scrollTo : { y: finalScroll, autoKill:true },
  //     ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
  //     autoKill: true,
  //     overwrite: 5
  //   });
  // });

  $('.weather-switch').on('click', function (e) {
    $(this).find('span').toggleClass('active'); 
  });

  $('.about-menu-toggle').on('click', function (e) {
    $(this).parent().find('.about-menu').slideToggle(500);
  });
  $('.dropdown-title').on('click', function (e) {
    $(this).parent().find('.dropdown-submenu').slideToggle();
  });
  $('.common-dropdown-title').on('click', function (e) {
  	$('a.common-dropdown-title').not($(this)).next().slideUp();
  	$(this).next().slideToggle();
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.common-dropdown-title').length === 0) {
      $('.common-dropdown-submenu').slideUp();
    }
  });
  $('.common-dropdown-submenu li a').on('click', function (e) {
    var value = $(this).attr('value');
    $(this).parents('.common-dropdown').find('.common-dropdown-title').html(value);
    $(this).parents('.common-dropdown-submenu').slideToggle();
  });


  $('.discover-more').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 150
    }, 1500, 'linear');
  });

  $('.header-search, .search-close').on('click', function() {
    $('.search-block').slideToggle(300);
  });
  $('.header-menu').on('click', function() {
    $('.popover-block.menu-block').addClass('open');
  });
  $('.popover-close').on('click', function() {
    $(this).parents('.popover-block').removeClass('open');
    $('.popover-block.menu-block .menu-list .menu li .sub-menu').removeClass('active');
    $('.popover-block').find('.site-menu').removeClass('open');
  });
  $('.popover-block.menu-block .menu-list .menu li .sub-menu').on('click', function() {
    var $this = $(this);
    $('.popover-block.menu-block .menu-list .menu li .sub-menu').removeClass('active');
    $this.addClass('active');
    var id = $this.data('id');
    $('.popover-block').find('.site-menu').removeClass('open');
    setTimeout(function(){ 
      $this.parents('.popover-block').find('#' + id).addClass('open');
    }, 400);
  });
  $('.back-sitemenu').on('click', function() {
    $('.popover-block.menu-block .menu-list .menu li .sub-menu').removeClass('active');
    $('.popover-block').find('.site-menu').removeClass('open');
  });

  $('.side-menu-cn .site-main-menu li > ul').each(function(){
    $parent = $(this).parent();
    $parent.addClass('has-sub');
    $parent.find('.site-main-menu-link').append('<i class="fa fa-angle-right"></i>');   
  });
  $('.has-sub li > ul').each(function(){
    $parent = $(this).parent();
    $parent.addClass('has-inner-sub');
    $parent.find('> a').addClass('inner-sub');   
    $parent.find('> a').append('<span class="sign"></span>');   
  });
  $('.inner-sub').on('click', function() {
    $(this).toggleClass('active');
    $(this).parent().find('ul').slideToggle();
  });
  $('.side-menu-cn .site-main-menu li > ul').on('mouseenter',function(){
    $(this).parent().addClass('active');
  });
  $('.side-menu-cn .site-main-menu li > ul').on('mouseleave',function(){
    $(this).parent().removeClass('active');
  });

  if($(window).outerWidth() < 768){
    $('.site-main-menu-link').addClass('accordion-site-menu');
    $('.has-sub').find('ul').css('display', 'none');
  } else {
    $('.site-main-menu-link').removeClass('accordion-site-menu');
    $('.has-sub').find('ul').css('display', 'block');
    $('.has-sub.has-inner-sub').find('ul').css('display', 'none');
  }

  $('.site-main-menu-link.accordion-site-menu').on('click', function() {
    $('.site-main-menu-link.accordion-site-menu').not($(this)).next().slideUp();
    $(this).next().slideToggle();

    $('.site-main-menu-link.accordion-site-menu').not($(this)).removeClass('open');
    $(this).toggleClass('open');
  });

  animate();

  aboutMenu();

  $('.has-animation').each(function(index) {
    if($(window).scrollTop() + $(window).height() > $(this).offset().top){ 
      $(this).delay($(this).data('delay')).queue(function(){
        $(this).addClass('animate-in');
      });
    }
  });

  $('.border-box, .draw-border-round').each(function(){
      if($(window).scrollTop() + $(window).height() > $(this).offset().top + 100){
        $(this).addClass('draw-border');
      }
  });
});

$(window).on('scroll',function(e){
  if ($(window).scrollTop() > 100) {
    $('header').addClass('fixed');
    $('.search-block').addClass('fixed');
  }else{
    $('header').removeClass('fixed');
    $('.search-block').removeClass('fixed');
  }

  animate();

  $('.has-animation').each(function(index) {
    if($(window).scrollTop() + $(window).height() > $(this).offset().top){ 
      $(this).delay($(this).data('delay')).queue(function(){
        $(this).addClass('animate-in');
      });    
    }   
  });

  $('.border-box, .draw-border-round').each(function(){
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + 100){
      $(this).addClass('draw-border');
    }
  });
});

$(window).on('resize', function(){
	aboutMenu();
  $('.news-block').slick('destroy');
  $('.news-block').slick('init');
	$('.square-tab-content-list').slick('destroy');
	$('.square-tab-content-list').slick('init'); 

  if($(window).outerWidth() < 768){
    $('.site-main-menu-link').addClass('accordion-site-menu');
    $('.has-sub').find('ul').css('display', 'none');
  } else {
    $('.site-main-menu-link').removeClass('accordion-site-menu');
    $('.has-sub').find('ul').css('display', 'block');
    $('.has-sub.has-inner-sub').find('ul').css('display', 'none');
  }
});

$(function() {
  $('.news-title').matchHeight({
    property: 'height'
  });
  $('.step-detail').matchHeight({
    property: 'height'
  });
  $('.visitor-box-detail h5').matchHeight({
    property: 'height'
  });
  $('.visitor-box-detail p').matchHeight({
    property: 'height'
  });
  $('.environment-box p').matchHeight({
    property: 'height'
  });
  $('.career-box h5').matchHeight({
    property: 'height'
  });
  $('.career-box p').matchHeight({
    property: 'height'
  });
  squareTabHeight();
  matchHeightInvestWhy();
});

function squareTabHeight(){
  $('.square-tab-content-detail h5').matchHeight({
    property: 'height'
  });
  $('.square-tab-content-detail p').matchHeight({
    property: 'height'
  });
};

function animate(){
  $('.wow').each(function(){
    var scrollTop = $(window).scrollTop();
    var elemTop = $(this).offset().top - $(window).height() + 100;

    if(elemTop < scrollTop) {
      $(this).addClass('animate');
    }
  });
};

function aboutMenu(){
  $(window).on('resize', function(){
    if($(window).outerWidth() > 575){
      $('.about-menu').addClass('show');
    } else {
      $('.about-menu').removeClass('show');
    }
  });
};

function matchHeightInvestWhy(){
	$('.invest-why-duqm-section').each(function() {
		$(this).find('.tab-icon-content').matchHeight({
			property: 'height',
			byRow: false
		});
	});
}

/***** Animate Wow Start *****/

$(function(){
  wow = new WOW({
    animateClass: 'animated',
    offset: 100,
  });
  wow.init();
});

/***** Animate Wow End *****/