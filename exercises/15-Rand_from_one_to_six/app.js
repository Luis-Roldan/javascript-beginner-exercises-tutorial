function getRandomInt(min, max)
{
	let randomNumber = Math.floor(Math.random() * (max - min + 1) + min );
	return randomNumber;
}
console.log(getRandomInt(1,6));