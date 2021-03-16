import { useEffect } from 'react';
import Link from "next/link";

function javascriptAlgorithmsCapitalizeFirstLetterOfEachWord() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Algorithms: Capitalize First Letter of Each Word In a Sentence</h2>
                <p>
                As I prepare for Javascript development interviews I've been reviewing various online articles and resources about different algorithms I'll likely get asked about. 
                Turns out that these things are actually pretty fun exercises and while I was able to do some of them all by my lonesome, others required some documentation lookups and Googling. 
                Like any development problem there are likely multiple good solutions but the ones I present here are probably the most direct and obvious - feel free to solve differently and generate your own solution.</p>
<p style={{fontStyle: "italic"}}>Capitalize the first letter of each word in a given sentence.</p>
<p>USAGE: Copy and paste the code samples below into the Javascript console in your browser (including the companies and/or ages arrays), then simply hit return on your keyboard to see the code in action.</p>

            </div>

            <div className="container">    	
<pre><code>{`
//CAPITALIZE THE FIRST LETTER OF EACH 
//WORD IN A SENTENCE
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')  
    /*lowercase everything and split the string 
	on each space char*/
    let capsArray = []  
    //create a new array to use 

    wordsArray.forEach(word => {  
        //loop over each word....
        capsArray.push(word[0].toUpperCase()
         + word.slice(1))  
         /*add each word to the new 
		capsArray, making the first char 
        upper and appending the remaining 
        chars to the end 
		of the array element*/
    });

    return capsArray.join(' ')  
    /*piece together the caps 
    array into the array we 
    previously declared */
}; 

console.log(capSentence("Here is my sentence."));
`}
</code></pre>

            </div>
        </div>

        )
    }    

export default javascriptAlgorithmsCapitalizeFirstLetterOfEachWord
