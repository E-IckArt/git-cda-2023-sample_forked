function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
function rotateRandom(target) {
    anime.remove(target);
    anime({
        targets: target,
        scale: 1.2,
        rotate: getRandomIntInclusive(-360, 360),
    });
}

function initialState(target) {
    anime.remove(target);
    anime({
        targets: target,
        rotate: 0,
        scale: 1,
    });
}
var geometries = document.querySelectorAll('.geometry');
geometries.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
        rotateRandom(event.target);
    });

    element.addEventListener('mouseleave', (event) => {
        initialState(event.target);
    });
});
anime
    .timeline({
        easing: 'easeInOutSine',
        delay: function (el, i) {
            return i * 250;
        },
    })
    .add({
        duration: 1500,
        targets: '.triangle path, .rectangle rect, .ellipse circle',
        strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
        targets: '.triangle path, .rectangle rect, .ellipse circle',
        strokeOpacity: 0,
        duration: 750,
        fill: '#E8649B',
    });
