var aboutEl = document.getElementById('about')
var aboutArr = aboutEl.children;
var projectsEl = document.getElementById('projects');
var projectsTitleEl = document.getElementById('projects_title');
var projectsItems = document.getElementById('projects_items');
var arrowEl = document.getElementById('arrow');

// TODO: Add 'onhover' for the more arrow.

var aboutOptions = {
    targets: aboutArr,
    duration: function(target, i) {
      var offset = 1000;
      return offset * (i + 1);
    },
    opacity: 1,
    easing: 'easeInBack',
}

var projectsTitleOptions = {
  targets: projectsTitleEl, 
  duration: 400,
  opacity: 1,
  easing: 'easeInOutCubic',
}

var projectsItemsOptions = {
  targets: projectsItems.children,
  opacity: 1,
  delay: 500,
  duration: function(target, i) {
    return 400 * (i + 1);
  },
  easing: 'easeInQuart',
}

var aboutAnimate = anime(aboutOptions);
var projectsAnimate;
var projectsItemsAnimate;
var arrowAnimate;
var projAnimateState = false;

window.addEventListener('scroll', _.throttle(function(){
  if((window.pageYOffset > projectsEl.offsetLeft) && !projAnimateState) {
    projectsAnimate = anime(projectsTitleOptions);
    projectsItemsAnimate = anime(projectsItemsOptions);
    projAnimateState = true;
  }
}, 600));

arrowEl.addEventListener('mouseover', _.throttle(function() {
  if(arrowAnimate) {
    arrowAnimate.reverse();
    arrowAnimate.play();
  }
  else {
    arrowAnimate = anime({
      targets: arrowEl,
      rotate: 90,
      duration: 1000,
      easing: 'easeInOutCubic',
    })
  }
}, 1000));

arrowEl.addEventListener('mouseout', _.throttle(function() {
  if(arrowAnimate) {
    arrowAnimate.reverse();
    arrowAnimate.play();
  }
}, 1000));