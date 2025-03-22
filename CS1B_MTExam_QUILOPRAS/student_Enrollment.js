let dsaStudents = [], webDevStudents = [], choice;
// Initialize three variables:
// - dsaStudents: an empty array to hold students enrolled in the DSA subject.
// - webDevStudents: an empty array for students enrolled in WebDev.
// - choice: a variable to hold the user's input for their choice of subject or action.

while (choice !== "C") {
    // Start a loop that continues until the user selects "C" (Exit).
    choice = prompt("Choose:\nA. DSA\nB. WebDev\nC. Exit");
    // Prompt the user to choose a subject (DSA, WebDev) or Exit the program.
    // The user's input is assigned to the variable 'choice'.

    if (choice === "A" || choice === "B") {
        // Check if the user selected either "A" (DSA) or "B" (WebDev).
        let action = prompt("1. Enroll\n2. Unenroll\n3. Back");
        // Prompt the user to choose an action for the selected subject:
        // - "1" to enroll a student.
        // - "2" to unenroll a student.
        // - "3" to go back to the main menu.
        
        let list = (choice === "A") ? dsaStudents : webDevStudents;
        // Use a ternary operator to set 'list' to either:
        // - dsaStudents if the user chose "A".
        // - webDevStudents if the user chose "B".

        if (action === "1") list.push(prompt("Enter student's name:"));
        // If the user selected "1" (Enroll), prompt them to enter the student's name.
        // Add the entered name to the appropriate list using the `push` method.

        else if (action === "2") {
            // If the user selected "2" (Unenroll), execute the following:
            let name = prompt("Enter name to remove:");
            // Prompt the user to enter the name of the student they wish to remove.
            
            let index = list.indexOf(name);
            // Use `indexOf` to find the position of the student's name in the list.
            // If the name is found, its index will be greater than or equal to 0.
            // Otherwise, `indexOf` returns -1.

            if (index !== -1) list.splice(index, 1);
            // If the name is found (index is not -1), remove it from the list using `splice`.
            else alert("Student not found.");
            // If the name is not found, display an alert stating "Student not found."
        }
    } else if (choice === "C") {
        // If the user selected "C" (Exit), execute the following:
        alert(`DSA: ${dsaStudents.join(", ")}\nWebDev: ${webDevStudents.join(", ")}`);
        // Display the lists of students enrolled in both subjects using `join()` to format them as strings.
    } else {
        alert("Invalid choice.");
        // If the user entered an invalid option, display an alert message.
    }
}

