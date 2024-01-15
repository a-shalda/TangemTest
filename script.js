const bannerOne = document.querySelector('.banner--one')
const bannerTwo = document.querySelector('.banner--two')

// localStorage.clear(); 

if (JSON.parse(localStorage.getItem('bannerVisible')) === false) {
  bannerTwo.style.display = 'none';
}

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
  }
  else if (isInViewport(bannerOne)) {
    bannerTwo.style.visibility = 'hidden';
  }
})

const close = document.querySelector('.banner--two__right__button--close')

close.addEventListener("click", () => {
  bannerTwo.style.display = 'none';
  localStorage.setItem('bannerVisible', JSON.stringify(false));
})