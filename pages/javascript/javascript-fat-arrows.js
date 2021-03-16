import { useEffect } from 'react';
import Link from "next/link";

function javascriptFatArrows() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Fat Arrows</h2>
                <p>
                ... sure, fat arrow functions mean a few less keys to type, but the real value is in the reference to THIS; standard functions use THIS to refer to whatever object 
                called the function, and the value of THIS would change accordingly. Fat arrows preserve the value of THIS to generate a consistent reference.
                </p>
               
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//use a .html page with a <button>Test</button> element
var button = document.querySelector('button');
//fat arrow this maintains the scope of the function
var fn2 = () => {console.log(this)};
//old fashioned functions this refers to 
//object that is calling the function
function fn() {console.log(this)};
button.addEventListener('click',fn2);

// build a class w/a constructor that 
//accepts a name when instantiated
class Person {
    constructor(name){
        this.name = name; 
    }

	//print name, traditional function call, it redefines 
    //"this" scope to the calling function 
    //(comes back empty)
    printNameFunction(){
        setTimeout(function() {
            console.log('Function: ' + this.name); 
        }, 100)
    }

	//...same exact print fn but uses fat arrow, 
    //"this" scope preserved to the method's 
    //scope (returns 'Rich')
    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: ' + this.name); 
        }, 100)
    }
}
let person = new Person('Rich');
person.printNameFunction();
person.printNameArrow(); 
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptFatArrows
