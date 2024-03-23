try {
  const str = "Hello";
  const reversed = str.split("").reverse().join(""); // reverse string
  console.log(reversed);
} catch (error) {
  console.error("Error string handling:", error.message);
}

///

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot be divided by 0");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Divade error:", error.message);
}
