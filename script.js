document.addEventListener("DOMContentLoaded", () => {
    let isMouseDown;
    let mouseX;
    let mouseY;

    const map = document.querySelector(".map");

    map.addEventListener("mousemove", (event) => {
        mouseX = event.clientX
        mouseY = event.clientY
    });

    map.addEventListener("click", click())

    map.addEventListener("mousedown", () => {isMouseDown = true});

    map.addEventListener("mouseup", () => {isMouseDown = false});
    
    function click () {
        const startX = mouseX
        const startY = mouseY
        
        while (isMouseDown()) {

        }
    };
});