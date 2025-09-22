// ====== DOM Elements ======
const inputField = document.getElementById("input-text");
const checkButton = document.getElementById("check-button");
const resultMessage = document.getElementById("result");

/**
 * Function: isPalindrome
 * ----------------------
 * Checks if a given string is a palindrome.
 * 
 * Steps:
 * 1. Remove all non-alphanumeric characters using regex.
 * 2. Convert the string to lowercase.
 * 3. Reverse the cleaned string.
 * 4. Compare the cleaned string with its reversed version.
 */
function isPalindrome(text) {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
}

// ====== Event Listener ======
checkButton.addEventListener("click", () => {
    const userText = inputField.value.trim(); // trim removes extra spaces at start/end

    if (userText === "") {
        resultMessage.textContent = "Please enter a word or sentence.";
        return;
    }

    if (isPalindrome(userText)) {
        resultMessage.textContent = `"${userText}" is a palindrome. ✅`;
    } else {
        resultMessage.textContent = `"${userText}" is not a palindrome. ❌`;
    }
});
