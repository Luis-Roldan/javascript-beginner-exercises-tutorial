function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1:
			return "red";

		case 2:
			return "yellow";

		case 3:
			return "blue";

		case 4:
			return "green";

		default:
			return "black";
	}
}

function getAllStudentColors(students) {
	//your loop here
	let exampleColor = getColor(1);
	let i = parseInt(students)
	while(i > 0){
		let randomNumb = Math.floor(Math.random() * (4 -1 + 1) + 1);
		console.log(randomNumb);
		i--
		console.log(getColor(randomNumb));
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);
