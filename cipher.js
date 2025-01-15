function calculateCipher() {
    // Get input values
    const plaintext = document.getElementById("plaintext").value;
    const key = document.getElementById("key").value;

    // Example: Simple cipher logic (replace with actual logic)
    const vigenereCipher = encryptVigenere(plaintext, key);
    const polybiusCipher = encryptPolybius(plaintext);
    const hybridCipher = hybridCipherLogic(plaintext, key);

    // Display results without spaces
    document.getElementById("results").innerHTML = `
        <strong>Vigenere:</strong> ${vigenereCipher}<br>
        <strong>Polybius:</strong> ${polybiusCipher}<br>
        <strong>Hybrid:</strong> ${hybridCipher}
    `;
}

function encryptVigenere(plaintext, key) {
    // Vigenere cipher logic (simplified for example)
    return plaintext.split('').map((char, index) => {
        const charCode = char.charCodeAt(0) + (key.charCodeAt(index % key.length) - 'a'.charCodeAt(0));
        return String.fromCharCode((charCode % 26) + 'A'.charCodeAt(0));
    }).join('');
}

function encryptPolybius(plaintext) {
    // Polybius square cipher logic (simplified for example)
    return plaintext.split('').map(char => {
        return char.charCodeAt(0).toString(16); // Convert to hex as an example
    }).join(''); // No spaces between characters
}

function hybridCipherLogic(plaintext, key) {
    // Hybrid cipher logic (simplified for example)
    const vigenerePart = encryptVigenere(plaintext, key);
    const polybiusPart = encryptPolybius(plaintext);
    return `${vigenerePart}${polybiusPart}`; // Concatenate without spaces
}
