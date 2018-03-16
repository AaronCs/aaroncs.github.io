var box = document.getElementsByClassName('box');

var boxOptions = {
    targets: box,
    rotate: 360,
    duration: function(target, i) {
      return 1000 * (i + 1);
    },
    opacity: 1,
    easing: 'easeInOutCubic',
    loop: true,
    direction: 'alternate',
}

var boxAnimate = anime(boxOptions);

/*
box.addEventListener('click', function() {
})
*/