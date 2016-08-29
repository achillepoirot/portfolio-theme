$(document).ready(function() {

  // Navigation toggle
  var $hamburgerButton = $(".hamburger");
  var $sideNav = $("#side-nav");
  var $topNav = $("#top-nav");
  var $navList = $("#nav-list");
  $hamburgerButton.on("click", function(event) {
    $hamburgerButton.toggleClass("is-active");
    $sideNav.toggleClass("is-visible");
    $topNav.toggleClass("is-visible");
  });

  // Smooth scroll for anchor elements
  $("a[href^='#']").on("click", function(event) {
    var target = $(this.hash);
    var offset = $(target).offset().top;
    $("html, body").animate({
      scrollTop: offset
    }, "slow");
    return false; // Note: http://stackoverflow.com/a/37603717/1804163 and https://stackoverflow.com/questions/1357118
    window.location.hash = this.hash;
  });

  // Hide photo caption outside the header
  var $photoCaption = $("#photo-caption");
  var $hidePoint = $("#about").offset().top;
  $(document).on("scroll", function(event) {
    if ($(this).scrollTop() >= $hidePoint) {
      $photoCaption.addClass("invisible");
    } else {
      $photoCaption.removeClass("invisible");
    }
  });

  // Reveal the go to top button halfway into the about section
  var $toTopButton = $("#to-top-button");
  var $revealPoint = ($("#work").offset().top - $("#about").offset().top) / 2;
  $(document).on("scroll", function(event) {
    if ($(this).scrollTop() >= $revealPoint) {
      $toTopButton.addClass("is-visible");
    } else {
      $toTopButton.removeClass("is-visible");
    }
  });

  // Reveal skill icons on scroll
  window.sr = ScrollReveal();
  var srConfig = { distance: "10rem", delay: 800 };
  sr.reveal(".skill", srConfig, 200);

  // Randomly flipping project cards (http://callmenick.com/post/css-transitions-transforms-animations-flipping-card)
  (function() {
    // cache vars
    var cards = document.querySelectorAll(".project-card.random-flip");
    var timeMin = 3;
    var timeMax = 20;
    var timeouts = [];
    // loop through cards
    for ( var i = 0, len = cards.length; i < len; i++ ) {
      var card = cards[i];
      var cardID = card.getAttribute("data-id");
      var id = "timeoutID" + cardID;
      var time = randomNum( timeMin, timeMax ) * 1000;
      cardsTimeout( id, time, card );
    }
    // timeout listener
    function cardsTimeout( id, time, card ) {
      if (id in timeouts) {
        clearTimeout(timeouts[id]);
      }
      timeouts[id] = setTimeout( function() {
        var c = card.classList;
        var newTime = randomNum( timeMin, timeMax ) * 1000;
        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
        cardsTimeout( id, newTime, card );
      }, time );
    }
    // random number generator given min and max
    function randomNum( min, max ) {
      return Math.random() * (max - min) + min;
    }
  })();




  // Typing animation

});