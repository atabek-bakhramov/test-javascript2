/**
 * The developer that wrote the code below tried to make it so that it doesn't get into the 'INITIALISING' block twice.
 * 
 * Besides the obvious answer that the initialise function is called twice, explain what is going wrong.
 * Add your explanation as a comment here:
 * As we all know the setTimeout is a built-in Javascript function that goes from Call Stack (which works as LIFO) into Web-APIs,
 * once the time is over it goes from Web-APIs into Event Queue (which works as FIFO). 
 * As soon as the Call Stack is empty, setTimeout function is brought to Call Stack.
 * So what the developer probably doesn't have in mind that the variable 'alreadyInitialised' would become true too late, since those two times of setTimeout are already on their way somewhere either in Web APIs or Event Queue,
 * and that's why the 'else' block runs twice
 * 
 * Now the developer has asked you how you would solve the problem. As mentioned in the comments they cannot change the time it takes to run the lines.
 * Explain to them what they should do in the comment here:
 * 
 * The developer could move the line 30 'alreadyInitialised = true;' to the line 26.
 * 
 */

// REMINDER: DO NOT ACTUALLY CHANGE THE CODE BELOW
let alreadyInitialised = false;

const initialise = () => {
    if (alreadyInitialised) {
        console.log('ALREADY INITIALISED');
    } else {
        console.log('INITIALISING');
        setTimeout(() => {
            // Run initialisation code!
            console.log('INITIALISED')
            alreadyInitialised = true;
        }, 1000); // The developer cannot change the 1000 number in the timeout
    }
}

/** The developer cannot change this code! */
initialise();
setTimeout(initialise, 100);