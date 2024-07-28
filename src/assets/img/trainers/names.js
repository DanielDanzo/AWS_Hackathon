// Define arrays of sample first names and last names
const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'Sarah', 'David', 'Emma', 'Daniel', 'Olivia', 'James', 'Sophia', 'Liam', 'Ava', 'Noah', 'Mia', 'Ethan', 'Isabella', 'Alexander', 'Charlotte', 'Benjamin', 'Amelia', 'Jacob', 'Harper', 'William', 'Evelyn'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker'];


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function getTrainer(){
    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    return firstName+" "+lastName;
}


export { getTrainer }