document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(sidenav);
    
    var burger = document.querySelector('.menu__close');
    
    if (burger) {
        burger.addEventListener('click', function(e) {
            var menu = document.getElementById('slide-out');
            var instance = M.Sidenav.getInstance(menu);
            
            if (instance) {
                // Если меню открыто - закрываем его
                if (instance.isOpen) {
                    e.preventDefault();
                    e.stopPropagation();
                    instance.close();
                }
            }
        });
    }
});