// to make text bold
function bold() {
    let object = document.getElementById("mytextarea");
    if( object.style.fontWeight == "bold" ) {
        object.style.fontWeight = "normal";
    }
    else {
        object.style.fontWeight = "bold";
    }
}

// to make text italic
function italic() {
    let object = document.getElementById("mytextarea");
    if( object.style.fontStyle == "italic" ) {
        object.style.fontStyle = "normal";
    }
    else {
        object.style.fontStyle = "italic";
    }
}

// to underline text
function underline() {
    let object = document.getElementById("mytextarea");
    if( object.style.textDecoration == "underline" ) {
        object.style.textDecoration = "none";
    }
    else {
        object.style.textDecoration = "underline";
    }
}

// increase and decrease text size
let plusNum=20
let minusNum=0
function aplus() {
    let object = document.getElementById("mytextarea");
    plusNum +=1
    console.log(plusNum)
    minusNum = plusNum
    object.style.fontSize = parseInt(plusNum)+"px";    
}

function aminus() {
    let object = document.getElementById("mytextarea");
    minusNum -=1
    console.log(minusNum)
    plusNum = minusNum
    object.style.fontSize = parseInt(minusNum)+"px";    
}