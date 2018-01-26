'use strict';



import bind from './lib/bind-events.js'
import initialize from './lib/selective-initializer.js';

import events from './main/global-event-handlers.js';
import selectors from './main/initializations.js';



function main(){

    bind( events );
    initialize( selectors );
    
}



window.onload = main;
