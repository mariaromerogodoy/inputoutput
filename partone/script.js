


const images = [
    "../images/sad.png", //A
     "../images/sleepy.png", //B
     "../images/surprised.png", //C
     "../images/mad.png", //D
     "../images/happy.png", //E
     "../images/confused.png", //F
     "../images/calm.png", //G
     "../images/concerned.png", //H
     "../images/crazy.png", //I
     "../images/creepy.png", //J
     "../images/disapointed.png", //K
     "../images/diviuse.png", //L
     "../images/dolledup.png", //M
     "../images/mistiviuse.png", //N
     "../images/old.png", //O
     "../images/overit.png", //P
     "../images/rich.png", //Q
     "../images/saliva.png", //R
     "../images/shocked.png", //S
     "../images/stressed.png", //T
     "../images/toungeout.png", //U
     "../images/meh.png", //V
     "../images/flirty.png", //W
     "../images/wink.png", //X
     "../images/tounge.png", //Y
     "../images/last.png"  //Z
 ];

function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
    
    // Assign an image based on character (A-Z)
    const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
    if (index >= 0 && index < images.length) {
        imgElement.src = images[index];
        imgElement.style.display = "block";
    } else {
        /* 
        alert("Please enter a letter between A and Z.");
        imgElement.style.display = "none";
        */

        // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
        imgElement.src = "tryagain.png"
        imgElement.style.display = "block";
    }
}