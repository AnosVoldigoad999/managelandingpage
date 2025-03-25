export const fromLeftToRight = {
initial:{
    opacity:0,
    x:-100
},
animate:{
    opacity:1,
    x:0
}
}

export const fromRightToLeft = {
    initial:{
        opacity:0,
        x:100
    },
    animate:{
        opacity:1,
        x:0
    }
}

export const fromTopToBottom = {
    initial:{
        opacity:0,
        y:-100
    },
    animate:{
        opacity:1,
        y:0
    }
}

export const fromBottomToTop = {
    initial:{
        opacity:0,
        y:100
    },
    animate:{
        opacity:1,
        y:0
    }
}

export const others = {
    transition:{
        ease:"easeInOut",
        duration:0.7
    },
    viewport:{
        once:true
    }
}