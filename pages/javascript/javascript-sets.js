import { useEffect } from 'react';
import Link from "next/link";

function javascriptSets() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Sets</h2>
                <p>
                ES6 has given us Sets, a list type that is kinda like arrays, but better, mainly because Sets automatically don't allow duplicates, so list management just got a whole lot easier.
                </p>
               
                <p>
                USAGE: Copy and paste the code samples below into the Javascript console in your browser, then simply hit return on your keyboard to see the code in action.    
                </p>
            </div>

            <div className="container">    	
<pre><code>{`//Sets
//A list of unique values (arrays can contain 
//duplicate values, sets only contain unique values 
//(easier to manage then arrays))
let set = new Set([1, 1, 1]);
console.log("New set: " + set);
set.add(15);
console.log('does set contain 15? 
' + set.has(15));

for (element of set) {
  console.log(element);
}

//Sets (sorta like CF structs)
let names = new Set();
names
  .add("Mike")
  .add("Rich")
  .add("Bob")
  .add("Dave")
  .add("Fred");
console.log("size of this 
set is:" + " " + names.size);
names.delete("Fred");
console.log("size of this 
set is:" + " " + names.size);
console.log(names.has("Rich"));
names.clear();
console.log("size of this set 
is:" + " " + names.size);

//More sets (duplicates)
let bros = ["Mike", "Rich", 
"Bob", "Dave", "Dave", "Mike"];
let refinedBros = new Set(bros);
console.log('refinedBros: ' 
+refinedBros);
//the spread operator adds 
//elements into an array
bros = [...refinedBros];
console.log("Final list: " + bros);
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptSets
