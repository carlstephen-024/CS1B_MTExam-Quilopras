const favNum = 10;//initialized value for fav number
while (true) {
    let user_guess = prompt("Enter your number guess(between 1 - 10):"); //prompting the user to input thier guess from 1-10

    let guess = Number(user_guess);
    if (guess < favNum) {                                           //condition if the guess is lover than the fav number
        console.log("Your number guess is too low, try again,");    //print statement
    } else if (guess > favNum) {                                    //condition if the guess is higher than the fav number
        console.log("Your guess is too High, try again.");          //print statement
    } else {                   //else, if the guess is correct;
        console.log(`Congratulations, you've guessed the right number: ${favNUM}`);//print statement will be executed
    }
}