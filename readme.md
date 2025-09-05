JS is dynamic type programming language 
- means C / C++ er moto data type string naki number naki boolean ta bole deya lage na.. j kono tupe er data ekhane rakha jaay define na korei 



---->Data Types in Js
There are two data types in js, Primitive and Non-Primitive 
Ex: of primitive data types
* String 
* Number
* BigInt
* Boolean
* Undefined
* Null
* Symbol
Ex: of Non-Primitive data types
* Objects
* Array
* Function




----> Difference between primitive and non-primitive data types:

Primitive Data Types

Definition: Basic, single values.

Examples: String, Number, BigInt, Boolean, Undefined, Null, Symbol.

Stored: By value (directly in memory).

Mutable?: ❌ Immutable (cannot be changed, only replaced).

Comparison: Compared by value.


-------------------------


Non-Primitive Data Types

Definition: Complex data structures that can hold multiple values.

Examples: Object, Array, Function, Date, Map, Set, etc.

Stored: By reference (the variable holds a pointer to memory location).

Mutable?: ✅ Mutable (contents can be modified).

Comparison: Compared by reference (not by value).




...----------------------------...

Undefined?
>
*undefined is a primitive data type in JavaScript.

*It means: a variable exists, but no value has been assigned yet.

*It’s different from null, because null is an intentional empty value, while undefined usually means “not set”.

Ways to get Undefined:
* Uninitialized Variable
* Function without return statement
* Missing Function arguments
* Accessing Non-existing object properties
* Accessing array Elements out of bounds 
* Void Operator
* Explicit Assignment
* Deleted Values


Null Vs Undefined:
> Null: An intentional empty value (sets it on purpose)
> Undefined: A variable is declared but not assigned value


> type of undefined is undefined>...... types of null is object


Quick Table
> Feature	    undefined        null
Meaning 	Not assigned / missing	   Intentional empty value
Set by	  JavaScript (by default)	   Developer (manually)
Type	  "undefined"      	"object" (JS bug)
Loose equality	   undefined == null → true	   Same
Strict equality  	undefined === null → false	  Different





Truthy and Falsie:::

there are 7 values in js are falsie:
* false
* 0 (and -0, 0n for BigInt zero)
* "" (empty string)
* null
* undefined
* NaN (Not a Number)
* document.all (weird historical case, almost never used)


everything beside this seven values are truthy 



Not(!) and Double not(!!)
> not makes everything false /  gives the opposite boolean
> double not makes everything actual boolean conversion of any value 


>           == vs ===



1. == (Loose Equality)

Compares values only.

Performs type coercion (tries to convert types before comparing).

👉 Example:

console.log(5 == "5");   // true (string "5" is converted to number 5)
console.log(null == undefined); // true (special case)
console.log(0 == false); // true (false coerced to 0)

2. === (Strict Equality)

Compares values AND types.

❌ No type coercion — both value and type must match.

👉 Example:

console.log(5 === "5");  // false (number vs string)
console.log(5 === 5);    // true (same type, same value)
console.log(null === undefined); // false (different types)





..> 
* kono ekta function er moddhe je scope/ {codes within function brackets} thake taake bole local scope ... or a block scope 
* normally file e function er baire j scope thake taake bole global scope ....

* Global scope er jinis j kono jagay use kora jaabe .. local scope er jinish local er baire use kora jabe na 

* function declare korar purbe function call korle setake bole hoisting ... hoisting hobe shudu matro function er space er moddhe ,, or global hoile nijer level er moddhe ..... kintu let / const diye kokhono use korle seta hoisting hobe na ba declare er purbe use kora jabe na 


> Kono ekta function er parameter hisebe jodi kono ekta function ke pathano hoy setake bole callback function...
> non  primitive values (object, array) are passed by reference