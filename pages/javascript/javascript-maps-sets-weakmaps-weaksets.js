import { useEffect } from 'react';
import Link from "next/link";

function javascriptMapsSetsWeakmapsWeaksets() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Maps, Sets, Weakmaps and Weaksets</h2>
                <p>
                ES6 now offers Maps, another list type that offers an infrastructure to manage collections of data with name/value pairs.</p>

                <p>USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.</p>

            </div>

            <div className="container">    	
<pre><code>{`//JAVASCRIPT DATA STRUCTURES
//SETS - Let you store unique values of different types

let myArray = [11,22,33,44,55]; 
// one way is to start with an array then convert it
let mySet = new Set(myArray);  
// use the new keyword and the Set() method

mySet.add("100"); 
//add another item to the set, this time a string
mySet.add({a:1, b:2});  
//add another, this time an object


mySet.delete(22); 
//delete an item
mySet.clear();  
//clear the entire set
console.log(mySet); 

mySet.add(100); 
//add a value, this time a number
mySet.add(100); 
//THIS WON'T WORK: Sets only accept unique values!

console.log(mySet.size); 
// output the size of the set

//loop over the set with forEach 
//(it takes an anonymous function)
mySet.forEach((val) => {
	console.log(val); 
}); 

/*WEAKSETS - A little more "memory friendly" 
than SETS as they can be garbage collected if 
no references to it exist anymore. Also, WeakSets 
can only hold objects, no primitives.*/
let carWeakSet = new WeakSet(); 

let car1 = {
	make:'Honda',
	model: 'Civic'
}; 

carWeakSet.add(car1);  

let car2 = {
	make:'Toyota',
	model: 'Camry'
};

carWeakSet.add(car2);

console.log(carWeakSet); 

carWeakSet.delete(car1);

console.log(carWeakSet); 


//MAPS - Let you store key/value pairs
let myMap = new Map([['a1','hello'],['b2','goodbye']]); 
//individual arrays inside of a master array
myMap.set('c3','foo');
myMap.delete('a1');
console.log(myMap); 

 

/*WEAKMAPS - A variant of Map that allows only objects
 as keys and removes them once they become 
inaccessible by other means ("memory friendly" 
like WeakSets).*/
let carWeakMap = new WeakMap();

let key1 = {
	id: 1
};  

let car1 = {
	make: 'Honda',
	model: 'Civic'
}; 

let key2 = {
	id: 2
};  

let car2 = {
	make: 'Toyota',
	model: 'Camry'
}; 

carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);

console.log(carWeakMap);
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptMapsSetsWeakmapsWeaksets
