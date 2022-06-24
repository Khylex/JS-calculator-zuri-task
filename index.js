function add(...args) {
  let sum = 0;
  for (args of args) 
  sum += args;
  return sum;
}

function subtract(...args) {
  let final = Object.values(args)[0];
  for (i = 1; i < Object.keys(args).length; i++) {
    final -= Object.values(args)[i];
  }
  return final;
}

function multiply(...args) {
  let final = Object.values(args)[0];
  for (i = 1; i < Object.keys(args).length; i++) {
    final *= Object.values(args)[i];
  }
  return final;
}

function divide(...args) {
  let final = Object.values(args)[0];
  for (i = 1; i < Object.keys(args).length; i++) {
    final /= Object.values(args)[i];
  }
  return final;
}

 alert("Read and Select an operation number: 1 is to Add , 2 is to Subtract , 3 is to Multiply , and  4 is to Divide");


while (true) {
  const choice = Number(window.prompt("Choose a number (1/2/3/4): "));

  if (choice == 1 || choice == 2 || choice == 3 || choice == 4) {
    const num1 = Number(window.prompt("Enter first number: "));
    const num2 = Number(window.prompt("Enter second number: "));
    if (choice === 1) alert("Answer " + add(num1, num2));
    if (choice === 2) alert("Answer " + subtract(num1, num2));
    if (choice === 3) alert("Answer " + multiply(num1, num2));
    if (choice === 4) alert("Answer " + divide(num1, num2));

    const next_calculation = window.prompt(
      "Let's do next calculation? (yes/no): "
    );

    if (next_calculation == "no") {
      alert("Okay,try again next time. Happy Solving!");
      break;
    }
  } else {
    alert("please select a valid operation number")
  }
}
