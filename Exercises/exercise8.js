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
    console.log(message)
}

async function main() {
  await f("Initializing Hacking");
  await f("Reading your files");
  await f("Password files Detected");
  await f("Sending all password and personal files to server");
  await f("Cleaning up");
}

main()