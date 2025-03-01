


const images = [
    "sad.png", //A
    "sleepy.png", //B
    "surprised.png", //C
    "mad.png", //D
    "happy.png", //E
    "confused.png", //F
    "calm.png", //G
    "concerned.png", //H
    "crazy.png", //I
    "creepy.png", //J
    "disapointed.png", //K
    "diviuse.png", //L
    "dolledup.png", //M
    "mistiviuse.png", //N
    "old.png", //O
    "overit.png", //P
    "rich.png", //Q
    "saliva.png", //R
    "shocked.png", //S
    "stressed.png", //T
    "toungeout.png", //U
    "meh.png", //V
    "flirty.png", //W
    "wink.png", //X
    "tounge.png", //Y
    "last.png"  //Z
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