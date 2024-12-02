// Global variables to store the generated key and encrypted data
let cryptoKey;
let encryptedData;

// Function to generate a key
async function generateKey() {
    cryptoKey = await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256, // AES-256 encryption
        },
        true, // Whether the key is exportable
        ["encrypt", "decrypt"] // Allowed operations
    );
    alert("Encryption key generated!");
}

// Function to encrypt a message
async function encryptMessage() {
    if (!cryptoKey) {
        alert("Please generate a key first!");
        return;
    }

    const message = document.getElementById("message").value;
    if (!message) {
        alert("Please enter a message to encrypt!");
        return;
    }

    const encoder = new TextEncoder();
    const encodedMessage = encoder.encode(message);

    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Generate random IV
    encryptedData = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv, // Initialization vector
        },
        cryptoKey,
        encodedMessage
    );

    // Save the IV for decryption
    window.iv = iv;

    document.getElementById("encrypted-output").textContent = `Encrypted Data: ${Buffer.from(
        encryptedData
    ).toString("hex")}`;
    alert("Message encrypted!");
}

// Function to decrypt the encrypted message
async function decryptMessage() {
    if (!cryptoKey || !encryptedData) {
        alert("Please encrypt a message first!");
        return;
    }

    const decryptedData = await window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: window.iv, // Use the same IV
        },
        cryptoKey,
        encryptedData
    );

    const decoder = new TextDecoder();
    const decryptedMessage = decoder.decode(decryptedData);

    document.getElementById("decrypted-output").textContent = `Decrypted Message: ${decryptedMessage}`;
    alert("Message decrypted!");
}
