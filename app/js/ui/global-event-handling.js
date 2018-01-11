
const events = {
    'click #site' : function( e ){
        const element = this;

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
