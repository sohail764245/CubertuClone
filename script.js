// MouseFollower
const follower = document.querySelector('.follower')
document.onmousemove = function(e) {
  gsap.to(follower, 0.6, { left: e.clientX, top: e.clientY, ease: Power2.easeOut});
//   gsap.to(follower, 0.6, { left: e.clientX, top: e.clientY, ease: Elastic.easeOut});
  
  // if (e.target.classList == 'feature-home-pgs') {
  //   gsap.to(follower, 0.3, {height:90 ,width:90, background: black})
  // } else {
  //   gsap.to(follower, 0.3 , {height:30 ,width:30,background: white})    
  // }
}
// slider
const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}



// ----------------image-slider2-----------------
