const bannerOne = document.querySelector('.banner--one')
const bannerTwo = document.querySelector('.banner--two')

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;

  return (
    rect.top >= -54 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth));
}

document.addEventListener("scroll", () => {

  if(!isInViewport(bannerOne)) {
    bannerTwo.style.visibility = 'visible';
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    bannerTwo.style.opacity = scrollTop / 100 - 1;

    
    if (window.innerWidth < 600) {
      bannerTwo.style.width = 100;
    }
    else if (window.innerWidth >= 600) {
      bannerTwo.style.width = 600;
    }
  }
  else if (isInViewport(bannerOne)) {
    bannerTwo.style.visibility = 'hidden';
  }
})

