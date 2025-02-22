function delay(delayTime) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayTime);
  });
}
function randomDelay() {
  return ((parseInt(Math.random() * 100) % 8) + 1) * 1000;
}
function flickeringLoadingBar(loadingDot,loadingBox, t,ft) {
    Object.assign(loadingDot.style, { transform: "translateX(0px)" });
    setTimeout(() => {
      Object.assign(loadingDot.style, { transform: "translateX(30px)" });
    }, 500);
    setTimeout(() => {
      Object.assign(loadingDot.style, { transform: "translateX(60px)" });
    }, 1000);
    setInterval(() => {
      setTimeout(() => {
        Object.assign(loadingDot.style, {
          transform: "translateX(0px)",
        });
      }, 500);
      setTimeout(() => {
        Object.assign(loadingDot.style, {
          transform: "translateX(30px)",
        });
      }, 1000);
      setTimeout(() => {
        Object.assign(loadingDot.style, {
          transform: "translateX(60px)",
        });
      }, 1500);
    }, 1500);
  setTimeout(()=>{
    loadingDot.remove()
    loadingBox.innerHTML = "DONE"
    Object.assign(loadingBox.style, {
      fontSize: "40px",
      border: "none",
      color: "lightgreen"
    })
  },ft)
}
async function f(message, t,ft, index) {
  await delay(t);
  let body = document.body;
  let container = document.createElement("div");
  Object.assign(container.style, {
    backgroundColor: "black",
    display: "flex",
    padding: "0px 10vw",
    height: "14vh",
  });
  body.append(container);
  container.innerHTML = message;

  if (index != 0) {
    let loadingBox = document.createElement("div");
    Object.assign(loadingBox.style, {
      width: "8vw",
      height: "8vh",
      backgroundColor: "black",
      border: "solid 2px white",
      marginLeft: "7vw",
      padding: "0px 0px",
    });
    container.append(loadingBox);

    let loadingDot = document.createElement("div");
    Object.assign(loadingDot.style, {
      position: "relative",
      bottom: "40.5vh",
      right: "1vw",
      fontSize: "45vh",
    });
    loadingDot.innerHTML = ".";
    loadingBox.append(loadingDot);

    flickeringLoadingBar(loadingDot,loadingBox, t,ft);
  }
}

async function main() {
  let messages = [
    "you kinda messed up",
    "Initializing Hacking".toLowerCase(),
    "Reading your files".toLowerCase(),
    "Password files Detected".toLowerCase(),
    "Sending all password and personal files to server".toLowerCase(),
    "Cleaning up".toLowerCase(),
  ];
  let delays = [];
  let future = [];
  for (const index in messages) {
    delays.push(randomDelay())
  }
  for (const index in messages) {
    if (index<delays.length-1)
      future.push(delays[parseInt(index)+1])
  }
  future.push(randomDelay())

  console.log(delays)
  console.log(future)

  for (const index in messages) {
    let delayTime = delays[index]
    let futureTime = future[index]
    if (index < 2) 
        delayTime = 1000;
    await f(messages[index], delayTime,futureTime, index);
  }
  await f("you're done bro, flee the country",0,0,0)
}
main();
