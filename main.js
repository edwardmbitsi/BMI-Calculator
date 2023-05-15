function calculateBMI() {
	var age = parseFloat(document.getElementById("age").value);
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);
  
	if (isNaN(age) || isNaN(weight) || isNaN(height)) {
	  document.getElementById("result").textContent = "Please enter values for age, weight, and height.";
	  return;
	}
  
	if (age <= 0 || weight <= 0 || height <= 0) {
	  document.getElementById("result").textContent = "Please enter positive values for age, weight, and height.";
	  return;
	}
  
	var heightInMeters = height / 100;
	var bmi = weight / (heightInMeters * heightInMeters);
	var category = getBMICategory(bmi);
  
	var result = "Your BMI is " + bmi.toFixed(2) + ", which is categorized as " + category + ".";
	document.getElementById("result").textContent = result;
  }
  
  function getBMICategory(bmi) {
	if (bmi < 18.5) {
	  return "Underweight";
	} else if (bmi < 25) {
	  return "Normal weight";
	} else if (bmi < 30) {
	  return "Overweight";
	} else {
	  return "Obese";
	}
  }
  