// Your code here:
const bottlesOfMilk = () => {
    str = ""
    for(let i = 5; i > 0; i--){
        if(i === 2){
            str += `${i-1} bottles of milk on the wall, ${i - 1} bottles of milk. Take one down and pass it around, no more bottles of milk on the wall.`
        }else if(i === 1){
            str += `No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`
        }else{

            str += `${i-1} bottles of milk on the wall, ${i - 1} bottles of milk. Take one down and pass it around, ${i-2} bottles of milk on the wall.`
        }

    }
    console.log(str)
    return str
};

bottlesOfMilk()