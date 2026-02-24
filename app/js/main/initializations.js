
const global = window;
const FOOTER_SCROLL_THRESHOLD = 100;



const selectors = {
    '#page-header-inner' : function(){
        const { offset } = this.dataset;
        const viewport = window;
        const $site = document.documentElement;
        const { documentElement: $pane = $site } = document;  
        const element = document.getElementById('site');
        
        let lastKnownOffset = 0;
        let requestedNewFrame = false;
        
        let scrolled = false;
        let changeHeaderOn = 0;
        let changeFooterOn = $pane.scrollHeight - FOOTER_SCROLL_THRESHOLD;
       
        if( offset === 'viewport' ){
            changeHeaderOn = global.innerHeight;
        }else{
            const offsetNumber = parseInt( offset, 10 );
            if( offsetNumber + '' !== 'NaN' ){
                changeHeaderOn = offsetNumber;
            }
        }
        changeHeaderOn = changeHeaderOn - 84;
        
        const scrollPage = ()=>{
            const currentScrollingPosition = isScrollingVertical();
            
            if( changeHeaderOn > 0 ){
                if ( currentScrollingPosition >= changeHeaderOn ) {
                    element.dataset.state_header = 'untouched';
                }else{
                    element.dataset.state_header = 'changed';
                }                
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
        
        scrollPage();
    },
    
    
    '#page-aside-nav': function(){
        const element = this;

        // FUTUREWORK: refactor the mobile indicator to be a global const instead of compute on-the-fly
        const isMobile = window.matchMedia('(max-width: 1023px)').matches;

        if( element.dataset.state === 'open' ){
            global.setTimeout(() => {
                element.dataset.state = 'closed';
            }, 200 );
        }

        element.addEventListener( 'click', function( event ){
            if( isMobile === false ){
                return;
            }

            if( element.dataset.state !== 'open' ){
                event.preventDefault();
                element.dataset.state = 'open';
            }else if( ! event.target.closest( 'a' ) ){
                element.dataset.state = 'closed';
            }
        });
    },
    
    
    '.component__image-gallery': function(){
        const element = this;
        const { jQuery } = global;
        
        if( typeof jQuery === 'undefined' ){
            return console.log( 'jquery not available' );
        }
        
        const controls = element.querySelector( '.controls' );
        const viewport = element.querySelector( '.viewport' );
        const items = viewport.querySelectorAll( '.item' );

        const slickDefaults = {
            slidesToShow: 1,
            slidesToScroll: 1
        };

        jQuery( viewport ).slick({
            ...slickDefaults,
            arrows: false,
            fade: true,
            asNavFor: items.length >= 2 ? controls : null,
            dots: false,
            infinite: items.length >= 2
        });

        if( items.length >= 2 ){
            jQuery( controls ).slick({
                ...slickDefaults,
                initialSlide: 0,
                asNavFor: viewport,
                centerMode: true,
                focusOnSelect: true,
                arrows: true,
                infinite: true,
                variableWidth: true,
                draggable: false
            });
        }else{
            controls.style.display = 'none';
        }

        element.querySelectorAll('.slick-slide > div, .item')
               .forEach( function( item ){
                   item.style.removeProperty( 'display' );
                   item.style.removeProperty( 'width' );
               });

        // FUTUREWORK: refactor the desktop indicator to be a global const instead of compute on-the-fly
        const isDesktop = window.matchMedia( '(min-width: 1024px)' ).matches;
        if( isDesktop ){
            const dialog = element.querySelector( '.image-zoom' );
            const dialogImg = dialog.querySelector( 'img' );
            const prevBtn = dialog.querySelector( '.zoom-prev' );
            const nextBtn = dialog.querySelector( '.zoom-next' );

            const images = Array.from( viewport.querySelectorAll( '.item img' ) );
            let currentIndex = 0;

            const showImage = function( index ) {
                currentIndex = ( index + images.length ) % images.length;
                dialogImg.src = images[ currentIndex ].src;
                dialogImg.alt = images[ currentIndex ].alt || '';
            };

            viewport.addEventListener( 'click', function( event ){
                const img = event.target.closest( '.item' )?.querySelector('img');
                if( typeof img !== 'undefined' && img !== null ){
                    currentIndex = images.indexOf( img );
                    showImage( currentIndex );
                    dialog.showModal();
                }
            });

            prevBtn.addEventListener( 'click', function( event ){
                event.stopPropagation();
                showImage( currentIndex - 1 );
            });

            nextBtn.addEventListener( 'click', function( event ){
                event.stopPropagation();
                showImage( currentIndex + 1 );
            });

            dialog.addEventListener( 'click', function( event ){
                if( event.target === dialog || event.target === dialogImg ){
                    dialog.close();
                    dialogImg.src = '';
                    dialogImg.alt = '';
                }
            });

            dialog.addEventListener( 'keydown', function( event ){
                if( event.key === 'ArrowLeft' ) showImage( currentIndex - 1 );
                if( event.key === 'ArrowRight' ) showImage( currentIndex + 1 );
            });
        }        
    },
    
    
    '#store-location': function(){
        const element = this;
        const { L: leaflet } = global;
        
        const COORDINATES = [
            52.4809994,             // lat
            13.425803200000018      // lng
        ];
        const popupContents = `
            <div class="ll__popup-content">
                <img src="/media/images/assets/logo_small_black.svg" alt="CHICHI Logo">
                <div class="contact-info">
                    <h3>Fahrradgeschäft</h3>
                    <address>
                        Flughafenstr. 50<br>
                        12053 Berlin
                    </address>
                </div>
            </div>
        `;
        const ZOOM = 15;
        // NOTE: until https://github.com/leaflet-extras/leaflet-providers/blob/master/leaflet-providers.js#L197
        // (enforcing https) is not released, we cannot use the providers package
        const MAP_PROVIDER_NAME = 'Thunderforest.OpenCycleMap';
        const MAP_PROVIDER_URL = 'https://{s}.tile.thunderforest.com/{variant}/{z}/{x}/{y}.png?apikey={apikey}';
        
        
        const provider = leaflet.tileLayer( 
            MAP_PROVIDER_URL,
            {
                apikey: 'edc8a89afa764f77ae70e47c50359b4f',
                variant: 'cycle'
            }
        );
        
        const icon = leaflet.icon({
            iconUrl: '/media/images/assets/icon_marker.svg',
            iconSize: [ 28, 42 ],
            iconAnchor: [ 14, 42 ],
            popupAnchor: [ 0, -40 ]
        });
        
        const marker = leaflet.marker( COORDINATES, { icon } );
        
        const popup = leaflet.popup({
            maxWidth: 300,
            minWidth: 250
        });
        popup.setContent( popupContents );
        
        const map = leaflet.map( element ).setView( COORDINATES, ZOOM );
        provider.addTo( map );
        marker.addTo( map )
            .bindPopup( popup )
            .openPopup();

    },

    'button.menu-toggle': function(){
        const element = this;

        element.addEventListener( 'click', function( event ){
            event.preventDefault();
            const { site } = global;
            const { dataset } = site;

            dataset.state_header_menu = dataset.state_header_menu === 'open' ? 'closed' : 'open';
            element.setAttribute( 'aria-expanded', dataset.state_header_menu === 'closed' );
        });
    },
};



export { selectors as default };
