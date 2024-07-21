const primaryNavigation = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute("data-visible");
    if(visibility==='false'){
        primaryNavigation.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if(visibility==='true') {
        primaryNavigation.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false);
    }
});