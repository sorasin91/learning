//Function to check number
function checkNumber(num) {
    if (num < 0) {
        //using template strings `` and interpolation
        console.log(`The number ${num} is negative`)
    }
    else if (num > 0) {
        console.log(`The number ${num} is positive`)
    }
    else {
        console.log(`The number ${num} is zero`)
    }
}

//Test the number
checkNumber(10)
checkNumber(-20)
checkNumber(0)

