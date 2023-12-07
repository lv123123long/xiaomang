const faulttext = {
    player: {},
    texts: [],
    init() {
        this.texts = [...document.getElementsByClassName('faulttext')];
    },
    fault() {
        clearInterval(this.player);
        setTimeout(() => {
            clearInterval(this.player);
            this.texts.forEach((text) => {
                text.classList.remove("faulttext_fault");
                text.style.transform = '';
                text.style.clipPath = '';
            });
        }, 1000)
        this.player = setInterval(() => {
            this.texts.forEach((text) => {
                text.classList.add("faulttext_fault");
                text.style.transform = `translate(${Math.random() * 60 - 30}%,${Math.random() * 60 - 30}%)`;
                let x = Math.random() * 100;
                let y = Math.random() * 100;
                let h = Math.random() * 50 + 50;
                let w = Math.random() * 40 + 10;
                text.style.clipPath = `polygon(${x}% ${y}%, ${x + w}% ${y}%, ${x + w}% ${y + h}%, ${x}% ${y + h}%)`
            })
        }, 30);
    }
};
faulttext.init();