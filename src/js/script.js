gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1
});

const textsSplit = document.querySelectorAll(".text-split")

const animar = () => {
    textsSplit.forEach(text => {

        const split = SplitText.create(text, {
            type: "lines words chars",
            mask: "lines"
        })

        gsap.from(split.chars, {
            opacity: 0,
            y: 40,
            stagger: .05,
            scrollTrigger: {
                trigger: text,
            }
        })

    })

    gsap.from(".secao-hero", {
        opacity: 0,
        duration: 1.5
    })

    gsap.from("picture:nth-child(1)", {
        y: -80,
        duration: 1
    })

    gsap.from("picture:nth-child(2)", {
        y: 80,
        duration: 1
    })

    gsap.from(".cidades img", {
        opacity: 0,
        filter: "blur(20px)",
        stagger: .5,
        scrollTrigger: { // O famoso gatilho de rolagem, Essa propriedade ativa as animações quando a barra lateral chegar no scroll start na tela
            trigger: ".secao-cidades",
            // markers: true, Ele serve para marcar na tela o inicio e o fim
            start: "30% 100%", // Define o inicio e o fim das animações conforme eu vou rolando a página
            scrub: true,
            end: "100%, 75%"
        }
    })

    gsap.from(".secao-estados ul li", {
        opacity: 0,
        x: 40,
        filter: "blur(20px)",
        stagger: .05,
        scrollTrigger: {
            trigger: ".secao-estados ul",
            scrub: true,
            start: "0% 80%",
            end: "100% 40%",
        }
    })

    gsap.from("footer", {
        y: -200,
        immediateRender: false,
        duration: .05,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            invalidateOnRefresh: true,
            start: "-30% 50%",
            end: "100% 100%"
        }
    })
}

const tl = gsap.timeline({
    onComplete() {
        gsap.to("#preloader", {
            opacity: 0,
            display: "none",
            overflow: "hidden"
        })
        document.body.style.overflow = "visible"
        animar()
    }
})

tl.from("#preloader path", {
    strokeDashoffset: 1900,
    duration: 2,
})

tl.to("#preloader path", {
    fill: "rgb(223, 26, 26)",
    duration: 1
})