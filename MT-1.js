document.getElementById("generateBtn").addEventListener("click", function() {
  const N = parseInt(document.getElementById("numberInput").value);
  let pattern = "";

  if (isNaN(N) || N < 1) {
    pattern = "Please enter a valid positive number.";
  } else {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += j;
      }
      pattern += "\n";
    }
  }

  document.getElementById("patternOutput").textContent = pattern;
});
