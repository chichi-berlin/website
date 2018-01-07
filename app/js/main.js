'use strict';




import bindGlobalHandlers from './ui/global-event-handling';
import selectiveInitializations from './ui/selective-initialization';



function main(){

    bindGlobalHandlers();
    selectiveInitializations();
    
}



window.onload = main;
