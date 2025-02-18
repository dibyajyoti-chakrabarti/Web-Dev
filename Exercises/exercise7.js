function f(title, channel, views, months, duration, thumbnail){
    let body = document.body
    Object.assign(body.style, {
        margin: "0px",
        padding: "0px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        fontFamily: "sans-serif",
        // overflow: "auto"
    })

    let container = document.createElement("div")
    body.append(container)
    
    Object.assign(container.style, {
        height: "30vh",
        width: "65vw",
        border: "2px solid black",
        backgroundColor: "white",
        display: "flex"
    })
    

    let left = document.createElement("div")
    left.classList.add("left")
    let right = document.createElement("div")
    right.classList.add("right")
    container.append(left,right)

    Object.assign(left.style, {
        width: "25vw",
        backgroundColor: "white",
        position: "relative",
        backgroundColor: "black"
    })

    let tb = document.createElement("img")
    let dur = document.createElement("div")
    left.append(tb,dur)
    tb.src = thumbnail
    Object.assign(tb.style, {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        borderRadius: "20px"
    })

    
    dur.innerHTML = duration
    Object.assign(dur.style, {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        fontSize: "25px",
        backgroundColor: "black",
        filter: "opacity(80%)",
        padding: "4px",
    })

    Object.assign(right.style, {
        width: "40vw",
        padding: "0px 20px",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column"
    })

    tit = document.createElement("h2")
    desc = document.createElement("div")
    right.append(tit,desc)
    Object.assign(desc.style, {
        color: "#ababab",
        fontSize: "15px",
        display: "flex",
        flexDirection: "column"
    })
    viti = document.createElement("p")
    owner = document.createElement("p")
    desc.append(viti,owner)
    tit.innerHTML = title
    viti.innerHTML = views+" views . "+months+" months ago"
    owner.innerHTML = channel
}

f("B.I.D. (Brainrot Investigation Department) EP 02 | VIYOMEE", "VIYOMEE", 317956, 2, "7:21", "https://i.ytimg.com/vi/M1NJMPER9-s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAm4gcUwTqKLcJUXXaB_WDC11Ef2Q")
