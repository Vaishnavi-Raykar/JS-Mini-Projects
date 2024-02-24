var tl = gsap.timeline()

tl.from("#page-upper>img,#page-upper1>h3,#page-upper2>h3,#page-upper2>button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#page-lower1",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0
})


tl.from("#page-end1",{
    y:50,
    duration:2,
    delay:0.5,
    repeat:-1,
    yoyo:true
})