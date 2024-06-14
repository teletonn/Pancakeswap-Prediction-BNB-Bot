function convertStringToUnicodeArray(str) {
    let unicodeArray = [];
    for (let i = 0; i < str.length; i++) {
        unicodeArray.push(str.charCodeAt(i));
    }
    return unicodeArray;
}

// Example usage:
let myString = "0x2AAB388cA6D9677A37C34e22F2A2B9faC2C2FfBF";  // Replace with your string to convert
let unicodeArray = convertStringToUnicodeArray(myString);
console.log(unicodeArray); // This will output: [72, 101, 108, 108, 111]
