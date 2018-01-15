
const global = window;



const selectors = {
    '#page-header-nav' : function(){
        const viewport = window;
        const $site = document.documentElement;
        const element = this;
        
        let lastKnownOffset = 0;
        let requestedNewFrame = false;
        
        let scrolled = false;
        const changeHeaderOn = 470;
        
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
