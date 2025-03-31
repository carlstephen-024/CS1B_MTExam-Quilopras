let age = prompt("Enter age to be categorized: ");//initialization and prompt for the user's input

if (age < 5){
    console.log("TODDLER"); //print statement for toddler
} else if (age >= 5 && age <= 12){
    console.log("CHILD");//for child
}else if (age >= 13 && age < 19){
    console.log("TEENAGER");//for teenager
}else if (age >= 20 && age <= 35){
    console.log("YOUNG ADULT");//fro young adult
}else if (age >= 36 && age <= 60){
    console.log("MIDDLE AGED");//fro middle aged
}else{
    console.log("SENIOR");//and for senior
}
