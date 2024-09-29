const sing = () => {

    str = ""
    for(i = 1; i <= 12; i++){
        if(i === 5){
            str += "there will be an answer, "
            console.log("there will be an answer, ")
        }else if(i === 11) {
            str += "whisper words of wisdom, "
            console.log("whisper words of wisdom, ")

        }else if(i === 12){
            str += "let it be "
            console.log("let it be ")
        } else {
            str += "let it be, "
            console.log("let it be, ")

        }
    };
    return str;

};

//Your code above ^^^

console.log(sing());