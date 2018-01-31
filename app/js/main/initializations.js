
import SideMenu from './../lib/side-menu.js';



const global = window;



const selectors = {
    '#page-header-nav' : function(){
        const viewport = window;
        const $site = document.documentElement;
        const { documentElement: $pane = $site } = document;  
        const element = document.getElementById('site');
        
        let lastKnownOffset = 0;
        let requestedNewFrame = false;
        
        let scrolled = false;
        const changeHeaderOn = 280;
        const changeFooterOn = $pane.scrollHeight - 100;
        
        const scrollPage = ()=>{
            const currentScrollingPosition = isScrollingVertical();
            
            if ( currentScrollingPosition >= changeHeaderOn ) {
                element.dataset.state_header = 'shrinked';
            }else{
                element.dataset.state_header = 'normal';
            }
        
            if ( currentScrollingPosition + global.innerHeight >= changeFooterOn ) {
                element.dataset.state_footer = 'visible';
            }else{
                element.dataset.state_footer = 'invisible';
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
