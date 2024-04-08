let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {

  //what % down is it?
  const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  //length to offset the dashes
  const drawLength = pathLength * scrollPercentage;

  // draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
})
