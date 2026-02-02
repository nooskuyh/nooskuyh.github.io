var rotateX = 0;

var mX, mY, distance;
var toX = 0.0;
var toY = 0.0;
var mX = 0.0;
var mY = 0.0;
var card  = document.querySelector('.card');

// Update the count down every 1 second
setInterval(function() {

    // card.style.setProperty('--rotate-x', rotateX +'deg');
    // rotateX += .1
    
    // var bgX = Math.sin(rotateX/360)
    // // console.log(bgX);
    // card.style.setProperty('--background-x', bgX*100+"%");
    
}, 10);



function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.offsetWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.offsetHeight/2)), 2)));
}



onmousemove = (e) => {
    mX = e.pageX;
    mY = e.pageY;
}
setInterval(function() {

    toX = ( toX * 9.0 + mX )/10.0
    toY = ( toY * 9.0 + mY )/10.0

    //console.log(toX,toY, mX)
    
    var dist = calculateDistance(card, mX, mY)

    var distX = toX - (card.offsetLeft+(card.offsetWidth/2));
    var distY = toY - (card.offsetTop+(card.offsetHeight/2));

    distX /= 150;
    distY /= 150;

    card.style.setProperty('--rotate-x', distX +'deg');
    card.style.setProperty('--rotate-y', -distY +'deg');
    
    card.style.setProperty('--background-x', -distX*2 +'%');
    card.style.setProperty('--background-y', distY*2 +'%');

    
    card.style.setProperty('--pointer-x', (mX-card.offsetLeft)/card.offsetWidth*100 +'%');
    card.style.setProperty('--pointer-y', (mY-card.offsetTop)/card.offsetHeight*100 +'%');


    card.style.setProperty('--pointer-from-center', 1-dist/1000);
    card.style.setProperty('--card-opacity', 1-dist/1000);


}, 10);