/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = (personObj) => {
    const { first, last, email, colors } = personObj;
    // const { first, last, email, colors } = personObj;
    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colosrs are:");

    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Mitch",
    Last: "Gohman",
    email: "mitch@me.com",
    colors: ["red", "green", "blue"],
};

const person2 = {
    first: "Shohreh",
    Last: "Mohseni",
    email: "shohreh.mohseni@gmail.com",
    colors: ["white", "pink", "black"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
