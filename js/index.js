var aboutEl = document.getElementById('about')
var aboutArr = aboutEl.children;
var projectsEl = document.getElementById('projects');
var projectsTitleEl = document.getElementById('projects_title');
var projectsItems = document.getElementById('projects_items');

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

// console.log(projectsItems.children);

var aboutAnimate = anime(aboutOptions);
var projectsAnimate;
var projectsItemsAnimate;
var projAnimateState = false;

window.addEventListener('scroll', _.throttle(function(){
  if((window.pageYOffset > projectsEl.offsetLeft) && !projAnimateState) {
    projectsAnimate = anime(projectsTitleOptions);
    projectsItemsAnimate = anime(projectsItemsOptions);
    projAnimateState = true;
  }
}, 600));