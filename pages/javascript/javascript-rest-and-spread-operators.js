import { useEffect } from 'react';
import Link from "next/link";

function javascriptRestAndSpreadOperators() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Rest & Spread Operators</h2>
                <p>
                Rest and Spread operators in Javascript will help you work with arrays and save you some typing. See the inline comments below for context.
                </p>
               
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//Rest operator
/*The 3 dots before the passed reference name 
//tells the function to create an array of 
whatever gets passed to it*/
function sumUp(...toAdd) {
  console.log(toAdd);
  let result = 0;
  for (i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
console.log(sumUp(100, 10, "20"));


//SPREAD operator (opposite to the 
//Rest operator)
//Copy the contents from one array 
//into another easily!
let array1 = 
['David','Rich','Bob','Mike'];
let array2 = 
['Sam','Steve','Mitchell', ...array1];
console.log(array2);

//Find the largest value in 
//an array of numbers
let scores = [97,94,90,77,74,73,60];
console.log(Math.max(...scores));

/*Copying an array used to be a PITA 
because JS copies objects by reference, 
so your copy is literally a copy and 
not a standalone new object (changes 
to the original array immediately 
appear in your copied array)*/
let myarray1 = [11,12,13];
//let myarray2 = myarray1;
let myarray2 = [...myarray1];
console.log(myarray2);
myarray1.push(50); 
console.log(myarray2); //this will change 
//based on how you declare myarray2 
//(spread operator)

//Use the Spread operator to aggregate the 
//arguments passed into a function
let fun1 = function(...args){
  console.log(args);
};

fun1(); 
fun1(4,5,6);
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptRestAndSpreadOperators
