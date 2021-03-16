import { useEffect } from 'react';
import Link from "next/link";

function javascriptDestructuring() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Destructuring</h2>
                <p>
                An eas(ier) way to extract specific values from an array into a variable, you not-so-instinctively put the array laden variable on the right side of the equals sign. Works with objects too!
                </p>
               
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//Destructuring arrays
let numbers = [1, 2, 3];
// set the variable names on the left of the 
//equals sign; reference the array on the right
let [a, b] = numbers;
console.log(a);
console.log(b);

//use destructuring to swap variable 
//values from arrays all in one line
let a = 5;
let b = 10;
//swap var values here
[b, a] = [a, b];
console.log(a, b);

//destructuring using objects, 
//note the alias!
let obj = {
  name: "Rich",
  age: 39,
  greet() {
    console.log("hola!");
  }
};
//when destructuring an object use 
//curly braces instead of brackets
let { name, greet: hello } = obj;
hello();
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptDestructuring
