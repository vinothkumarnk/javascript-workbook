//Use a do...while loop to console.log the numbers from 1 to 1000.

var i=1000;
do{
    console.log(i);
    i--;
}while(i>0);


// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

var person = [{
    firstName : 'Jane',
    lastName : 'Doe',
    birthDate : 'Jan 5, 1925',
    gender: 'female'
    }];

   console.log(person);


    // Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
   let x;
    for (x in person){
            var dt = new Date(person[x].birthDate);
            if(dt.getFullYear % 2 !=0)
                console.log(person[x].birthDate);
    }


    // Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. 
    // Feel free to change the values to reflect multiple people you might have in your database.


    var arrayOfPersons  = [{
        firstName : 'Jane',
        lastName : 'Doe',
        birthDate : 'Jan 5, 1925',
        gender: 'female'
        },
        {
            firstName : 'Tom',
            lastName : 'Mark',
            birthDate : 'Feb 5, 1996',
            gender: 'Male'
            },
            {
                firstName : 'Gina',
                lastName : 'Thomas',
                birthDate : 'Mar 5, 1895',
                gender: 'female'
                }];

                // Use .map() to map over the arrayOfPersons and console.log() their information.
                console.log(arrayOfPersons.map(x => x.firstName +' ' + x.lastName + ' '+ x.birthDate + ' '+ x.gender));

                // // Use .filter() to filter the persons array and console.log only males in the array.
                console.log(arrayOfPersons.filter(x => x.gender === 'Male'))

                // Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
                console.log(arrayOfPersons.filter(x => new Date(x.birthDate) < new Date("Jan 1, 1990")))