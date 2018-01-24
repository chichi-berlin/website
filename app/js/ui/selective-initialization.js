
import SideMenu from './lib/side-menu.js';



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
        let menuEl = this;
        
        const sideMenu = new SideMenu(menuEl, {
            // breadcrumbsCtrl : true, // show breadcrumbs
            // initialBreadcrumb : 'all', // initial breadcrumb text
            backCtrl : false, // show back button
            // itemsDelayInterval : 60, // delay between each menu item sliding animation
            onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
        });
        
        // mobile menu toggle
        const openMenuCtrl = document.querySelector('.action--open');
        const closeMenuCtrl = document.querySelector('.action--close');
        
        function openMenu() {
            menuEl.classList.add('menu--open');
            closeMenuCtrl.focus();
        }
        if( openMenuCtrl !== null ){ openMenuCtrl.addEventListener('click', openMenu); }
        function closeMenu() {
            menuEl.classList.remove( 'menu--open');
            openMenuCtrl.focus();
        }
        if( closeMenuCtrl !== null ){ closeMenuCtrl.addEventListener('click', closeMenu); }
        
        // simulate grid content loading
        var gridWrapper = document.querySelector('.content');
        function loadDummyData(ev, itemName) {
            ev.preventDefault();
            closeMenu();
            gridWrapper.innerHTML = '';
            gridWrapper.classList.add('content--loading');
            setTimeout(function() {
                gridWrapper.classList.remove( 'content--loading');
                gridWrapper.innerHTML = '<ul class="products">' + '<li>TODO</li>' + '<ul>';
            }, 700);
        }
        
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



function initialize(){
    const { document } = window;

    Object.keys(selectors).forEach((selector)=>{
        document.querySelectorAll(selector).forEach((element)=>{
            const fn = selectors[selector];
            fn.call(element);
        });
    });
}



export { initialize as default };
