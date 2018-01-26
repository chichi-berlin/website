
function initialize( selectors = {} ){
    const { document } = window;

    Object.keys(selectors).forEach((selector)=>{
        document.querySelectorAll(selector).forEach((element)=>{
            const fn = selectors[selector];
            fn.call(element);
        });
    });
}



export { initialize as default };
