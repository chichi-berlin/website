
import SideMenu from './../lib/side-menu.js';



const global = window;



const selectors = {
    '#page-header-nav' : function(){
        const viewport = window;
        const $site = document.documentElement;
        const element = this;
        
        let lastKnownOffset = 0;
        let requestedNewFrame = false;
        
        let scrolled = false;
        const changeHeaderOn = 180;
        
        const scrollPage = ()=>{
            if ( isScrollingVertical() >= changeHeaderOn ) {
                element.dataset.state = 'shrinked';
            }else{
                element.dataset.state = 'normal';
            }
            scrolled = false;
        };
        
        const isScrollingVertical = ()=>{
            if( lastKnownOffset > 0 ){
                return lastKnownOffset;
            }else{
                return $site.scrollTop;
            }
        };
        
        viewport.addEventListener( 'scroll', function( event ) {
            
            lastKnownOffset = viewport.scrollY;
            if( requestedNewFrame === false ){          
                global.requestAnimationFrame(function() {
            
                    if( scrolled === false) {
                        scrolled = true;
                        global.setTimeout( scrollPage, 150 );
                    }
                    
                    requestedNewFrame = false;
                });
                requestedNewFrame = true;
            }
            
        }, false );
    },
    
    
    '#side-menu' : function(){
        let menuElement = this;
        
        const sideMenu = new SideMenu(menuElement, {
            // breadcrumbsCtrl : true, // show breadcrumbs
            // initialBreadcrumb : 'all', // initial breadcrumb text
            backCtrl : false, // show back button
            // itemsDelayInterval : 60, // delay between each menu item sliding animation
            onItemClick( e, itemName ){
                // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item]) 
                window.location.href = e.target.href;
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
    },
    

    '#insurance-fee-calculator': function(){
        const element = this;
        const { PPIT } = global;
        
        if( typeof PPIT === 'undefined' ){ return; }
        
        new PPIT.RT({
            appId: '31d68559-31cf-4794-8ddd-1f93d6bd635c',
            target: `#${ element.id }`,
            ns: 'insurance-fee-calculator',
            iframe: false,
            inittab: 1
        });
    }
};



export { selectors as default };
