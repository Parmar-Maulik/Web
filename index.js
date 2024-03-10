let typed = new Typed(".multiple",{
    strings: ["Mechanical Engineer", "EC Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay:1000,
    loop: true
})
function contactbar() {
    window.open("contact.html", '_parent');
}
function home() {
    window.open("index.html", '_parent');
}
function resume() {
    window.open("resume.html", '_parent');
}
function gallery() {
    window.open("gallery.html", '_parent');
}
function biodata() {
    window.open("biodata.html", '_parent');
}
function phone() {
    window.open("tel:8733825132", '_parent');
}
function email() {
    window.open("mailto:parmarmaulik3821@gmail.com", '_parent');
}
function facebook() {
    window.open("https://www.facebook.com/maulik.parmar.9699523", '_parent');
}
function instagram() {
    window.open("https://www.instagram.com/maulik9320/", '_blank');
}
function linkedin() {
    window.open("https://www.linkedin.com/in/maulik-parmar-b699b6273/", '_blank');
}
function parmarlocation(){
    window.open("https://maps.app.goo.gl/XGpVE2MYwphWP63S6", '_blank');
}

function inside2() {
    let zoom = document.getElementsByClassName("contactbox2");
    let icon = document.getElementById("icon2");

    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoom.length; i++) {
        let contactbox2 = zoom[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox2).getPropertyValue("width");

        icon.style.fontSize = "22px";
        contactbox2.style.marginTop = "34px";
    }
}

function outside2() {
    let zoomout = document.getElementsByClassName("contactbox2");
    let iconout = document.getElementById("icon2");
    
    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoomout.length; i++) {
        let contactbox2 = zoomout[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox2).getPropertyValue("width");

        iconout.style.fontSize = "16px";
        contactbox2.style.marginTop = "40px";
    }
}
function inside() {
    let zoom = document.getElementsByClassName("contactbox1");
    let icon = document.getElementById("icon1");

    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoom.length; i++) {
        let contactbox1 = zoom[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox1).getPropertyValue("width");

        icon.style.fontSize = "22px";
        contactbox1.style.marginTop = "34px";
    }
}

function outside() {
    let zoomout = document.getElementsByClassName("contactbox1");
    let iconout = document.getElementById("icon1");
    
    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoomout.length; i++) {
        let contactbox1 = zoomout[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox1).getPropertyValue("width");

        iconout.style.fontSize = "16px";
        contactbox1.style.marginTop = "40px";
    }
}
function inside3() {
    let zoom = document.getElementsByClassName("contactbox3");
    let icon = document.getElementById("icon3");

    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoom.length; i++) {
        let contactbox3 = zoom[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox3).getPropertyValue("width");

        icon.style.fontSize = "22px";
        contactbox3.style.marginTop = "34px";
    }
}

function outside3() {
    let zoomout = document.getElementsByClassName("contactbox3");
    let iconout = document.getElementById("icon3");
    
    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoomout.length; i++) {
        let contactbox3 = zoomout[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox3).getPropertyValue("width");

        iconout.style.fontSize = "16px";
        contactbox3.style.marginTop = "40px";
    }
}
function menubtn() {
    let swipmenu = document.getElementsByClassName('width30')[0]; // Assuming only one element with class 'width30'
    let opacityElement = document.getElementById('opacity');

    if (swipmenu.style.left === "0px") {
        swipmenu.style.left = "-270px";
        opacityElement.style.filter = "brightness(100%)";
    } else {
        swipmenu.style.left = "0px";
        opacityElement.style.filter = "brightness(50%)";
    }
}

function opacity() {
    let opacity1 = document.getElementById('opacity');
    let swipmenu = document.getElementsByClassName('width30')[0];

    if (swipmenu.style.left === "0px") {
        swipmenu.style.left = "-270px";
        opacity1.style.filter = "brightness(100%)";
    } 
}

