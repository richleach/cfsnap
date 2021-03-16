import { useEffect } from 'react';
import Link from "next/link";

function javascriptAlgorithmsNumberOfDaysBetweenTwoDates() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Algorithms: Number of Days Between Two Dates</h2>
                <p>
                As I prepare for Javascript development interviews I've been reviewing various online articles and resources about different algorithms I'll likely get asked about. 
                Turns out that these things are actually pretty fun exercises and while I was able to do some of them all by my lonesome, others required some documentation lookups and Googling. 
                Like any development problem there are likely multiple good solutions but the ones I present here are probably the most direct and obvious - feel free to solve differently and generate your own solution.</p>
<p style={{fontStyle: "italic"}}>Write a solution in Javascript where, if I give you two different dates you'll return the number of days between them. For example, if I provide "December 25, 2016" and "January 1, 2017" your solution will return "7".</p>
<p>USAGE: Copy and paste the code samples below into the Javascript console in your browser (including the companies and/or ages arrays), then simply hit return on your keyboard to see the code in action.</p>

            </div>

            <div className="container">    	
<pre><code>{`//CALCULATE THE NUMBER OF DAYS BETWEEN TWO DATES
//FIND THE NUMBER OF DAYS BETWEEN TWO DATE OBJECTS
let start = new Date("December 25, 2016"), 
//create new date object with date set
end = new Date("January 1, 2017"), 
//...same, new date object
days = 1000 * 60 * 60 * 24; 
//JS date objects render the date in 
//milliseconds from 1/1/1970, 
//use this math for days calculation

let diff = end - start;
console.log(Math.floor(diff / days) 
+ " days have passed since " + start);
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAlgorithmsNumberOfDaysBetweenTwoDates
