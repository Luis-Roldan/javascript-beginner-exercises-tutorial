let total = prompt('How many km are left to go?');

// Your code below:

const answer = (total) => {
    if(parseInt(total) <= 50)
        return "I'm parking. I'll see you right now";
    else if(parseInt(total) > 100)
        return "We still have a bit of driving left to go";
    else
        return "We'll be there in 5 minutes";
}

console.log(answer(total));