function wordByUser() {
  let wordInput = document.getElementById("userInput").value;
  let reverseWord = wordInput.split("").reverse().join("");

  if (reverseWord === wordInput) {
    let response = wordInput + " is a palindrome";
    document.getElementById("changeHeader2").innerHTML = response;
  } else {
    let response = wordInput + " is not a palindrome";
    document.getElementById("changeHeader2").innerHTML = response;
  }
}
