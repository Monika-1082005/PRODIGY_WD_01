function imgChanger(anything) {
    document.querySelector('.starbucks').src = anything;
}

function circleColorChanger(anyColor) {
    let circle = document.querySelector('.circle');
    circle.style.background = anyColor;
    let socialIcon = document.querySelector('.social-media');
    socialIcon.style.background = anyColor;
}

function menuToggle() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}







