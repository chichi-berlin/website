
const selectors = {
    '.video-wrap video' : function(){
        const element = this;

        element.muted = false;
        element.volume = 0.5;
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
