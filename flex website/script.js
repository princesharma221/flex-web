 const navlinks = document.getElementById('nav-links');
 const togglebutton = document.getElementById('nav-toggle');

 togglebutton.addEventListener('click', () => {
    navlinks.classList.toggle('active')
 });