
  const timeline=gsap.timeline({duration:2});
  timeline
    .fromTo(".logo",{opacity:0},{opacity:1})
    .fromTo(".acm",{opacity:0},{opacity:1,delay:1})
    .fromTo(".logo",{scale:1},{scale:1.1,duration:1.5,yoyo:true,repeat:3,onComplete:()=>{scroll({left:0,top:window.innerHeight,behavior:"smooth"})}},"<.05")
    .fromTo(".links",{opacity:0.0},{opacity:1},"<1")
