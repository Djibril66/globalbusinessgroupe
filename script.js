window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});

var toggle_menu = document.querySelector('.responsive-menu');
        var menu = document.querySelector('.navbar');
        toggle_menu.onclick= function(){
            toggle_menu.classList.toggle('active');
            menu.classList.toggle('responsive');
        }