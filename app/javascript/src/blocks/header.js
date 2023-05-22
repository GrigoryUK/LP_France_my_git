
export default function() {
  const navToggleBtn = document.querySelector('.header__nav-toggle');
  const navList = document.querySelector('.header__nav');

  navToggleBtn && navToggleBtn.addEventListener('click', function() {
    const isShown = navList.classList.contains('header__nav--show');
    console.log('click ');
    navToggleBtn.classList.toggle('header__nav-toggle--show', !isShown);
    navList.classList.toggle('header__nav--show', !isShown);
  });
}
