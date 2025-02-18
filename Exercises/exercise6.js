let elements = document.querySelectorAll(".box")
elements.forEach(e=>{
    let r = parseInt(Math.random()*1000)%256;
    let g = parseInt(Math.random()*1000)%256;
    let b = parseInt(Math.random()*1000)%256;
    e.style.backgroundColor = `rgb(${r},${g},${b})`
})