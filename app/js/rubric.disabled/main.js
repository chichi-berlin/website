'use strict';



import initialize from './../lib/selective-initializer.js';

import selectors from './initializations.js';



function main(){

    initialize( selectors );
    
}



window.onload = main;
