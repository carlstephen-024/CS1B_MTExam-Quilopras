// Prompt the user whether they want to create a grocery list.
let grocery_list = prompt("Create a grocery list (yes/no): ");

if (grocery_list === "yes") {
    // If the user says "yes", prompt them to input the number of items for the grocery list.
    let item_num = parseInt(prompt("Input the number of items to be registered in the grocery list: "));

    // Check if the entered number is valid (not NaN) and greater than zero.
    if (!isNaN(item_num) && item_num > 0) {
        let items = []; // Initialize an empty array to store the grocery items.

        // Loop to gather the specified number of items from the user.
        for (let i = 0; i < item_num; i++) {
            let item = prompt(`Enter item ${i + 1}:`); // Prompt the user for each item.
            items.push(item); // Add the item to the array using the push method.
        }

        // Sort the items in alphabetical order.
        items.sort();

        // Reverse the sorted items to display them in reverse alphabetical order.
        items.reverse();

        // Display the reversed grocery list in the console.
        console.log("Your grocery list in reverse order:");
        console.log(items);
    } else {
        // If the number of items is invalid, display an error message.
        console.log("Invalid number of items. Please try again.");
    }
} else {
    // If the user says "no", display a message and end the program.
    console.log("Thank you, come back if you change your mind.");
}
