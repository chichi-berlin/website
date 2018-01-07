




const events = {
    'click .video-wrap video' : function( e ){
        const element = this;

        if( element.paused ){
            element.play();
        }else{
            element.pause();
        }
    },

    'contextmenu document' : function( e ){
        e.preventDefault();
        e.stopPropagation();
    }
};



function bind(){
    const { document } = window;
    let bindings = {};

    Object.keys(events).forEach((eventId)=>{
        const idParts = eventId.split(' ');
        const eventName = idParts.shift();
        const selector = idParts.join(' ');
        const handler = events[eventId];

        let elements = [];
        if( selector === 'window' ){
            elements.push(window);
        }else if( selector === 'document' ){
            elements.push(document);
        }else{
            elements = document.querySelectorAll(selector);
        }

        const handlerRefs = [];
        elements.forEach((element)=>{
            const ref = element.addEventListener(eventName, handler.bind(element));
            handlerRefs.push(ref);
        });
        bindings[eventId] = handlerRefs;
    });
}



export { bind as default };
