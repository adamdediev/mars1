function paralax(event) {
    this.querySelectorAll('.background').forEach(background => {
        background.style.transform = `translateX(${event.clientX/10}px)`
    });
};

    // document.addEventListener('mousemove',paralax);