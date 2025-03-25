function displayImage() {
    const imgElement = document.getElementById("displayedImage");

    //Letter
    const input1_letter = document.getElementById("charInput1").value.toUpperCase();
    const input2_letter = document.getElementById("charInput2").value.toUpperCase();
    
    //Number
    const input1_number = input1_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
    const input2_number = input2_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII

    //HINTS
    //HINT 1: You can compare strings with comparison operators and boolean operators
    //COMPARISON & LOGICAL OPERATORS: https://www.w3schools.com/js/js_comparisons.asp
    let mymathresult = input1_number - input2_number;
    console.log("Math result: ", mymathresult);

    if (input1_number === 65 && input2_number === 66) {
        // A and B
        imgElement.src = "../images2/basket3.png";
    } else if (input1_number === 78 && input2_number === 79) {
        // N and O
        imgElement.src = "../images2/basket2.png";
    } else if (input1_number === 89 && input2_number === 90 && mymathresult < 1) {
        // Y and Z
        imgElement.src = "../images2/basket1.png";
    } else {
        imgElement.src = "../images2/trash.png";
    }

    imgElement.style.display = "block";
}