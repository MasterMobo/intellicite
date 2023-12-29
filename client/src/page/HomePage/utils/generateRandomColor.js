import md5 from "md5";

// Function to generate a unique color based on input string
function generateRandomColor(inputString) {
    // Calculate a numerical value based on the characters in the string
    let totalValue = 0;
    for (let i = 0; i < inputString.length; i++) {
        totalValue += inputString.charCodeAt(i);
    }

    // Allow for overlapping values by taking the modulo 360
    const hue = totalValue % 360;

    return `hsl(${hue}, 90%, 77%)`;
}

export default generateRandomColor;
