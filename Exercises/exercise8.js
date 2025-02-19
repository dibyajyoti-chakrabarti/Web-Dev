function delay(delayTime){
    return new Promise(resolve=>{
        setTimeout(resolve, delayTime)
    })
}
function randomDelay(){
    return ((parseInt(Math.random()*100)%8)+1)*1000

}
async function f(message){
    let a = await delay(randomDelay())
    let body = document.body
    let container = document.createElement("div")
    Object.assign(container.style, {
        backgroundColor: "black"
    })
    body.append(container)
    container.innerHTML = message
    
    console.log(message)
}

async function main() {
    await f("Initializing Hacking".toUpperCase());
    await f("Reading your files".toUpperCase());
    await f("Password files Detected".toUpperCase());
    await f("Sending all password and personal files to server".toUpperCase());
    await f("Cleaning up".toUpperCase());
}

main()