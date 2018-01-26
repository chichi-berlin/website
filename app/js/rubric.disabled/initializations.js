
import SideMenu from './lib/side-menu.js';



const selectors = {

    // NOTE: [20180126] not yet needed. because, there is no client-site rendering yet adn therefore 
    // no animation is required. At the moment, init is done in /main/initialization.js
    '#side-menu' : function(){
        let menuElement = this;
        
        const sideMenu = new SideMenu(menuElement, {
            // breadcrumbsCtrl : true, // show breadcrumbs
            // initialBreadcrumb : 'all', // initial breadcrumb text
            backCtrl : false, // show back button
            // itemsDelayInterval : 60, // delay between each menu item sliding animation
            onItemClick( ev, itemName ){
                // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])   
            }
        });
        
        // mobile menu toggle
        const openMenuCtrl = document.querySelector('.action--open');
        const closeMenuCtrl = document.querySelector('.action--close');
        
        function openMenu() {
            menuElement.classList.add('menu--open');
            closeMenuCtrl.focus();
        }
        if( openMenuCtrl !== null ){ openMenuCtrl.addEventListener('click', openMenu); }
        function closeMenu() {
            menuElement.classList.remove( 'menu--open');
            openMenuCtrl.focus();
        }
        if( closeMenuCtrl !== null ){ closeMenuCtrl.addEventListener('click', closeMenu); }
    }
};



export { selectors as default };
