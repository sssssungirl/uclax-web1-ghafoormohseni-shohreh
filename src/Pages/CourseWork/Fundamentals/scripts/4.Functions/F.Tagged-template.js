/*===================================
||
|| Functions: Tagged Template String Functions
||
===================================*/
console.group("Functions: Tagged Template String Functions");

const MyTaggedTmpsStrFn = (strings, ...values) => {
    return `${strings[0]} ${values[0]} ${strings[1]}`;
};

const location = "pool";

const result = MyTaggedTmpsStrFn`I went to the ${location} Park yesterday.`;

console.log(result);

console.groupEnd();
