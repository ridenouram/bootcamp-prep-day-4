// eslint-disable-next-line
function greet() {
    
    // get the inputs by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    // get the values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    

    // make the greeting
    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    
    //display greeting
    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;
    

    //remove prompt
}

// TODO: validate name inputs
// TODO: clear inputs after greet?

