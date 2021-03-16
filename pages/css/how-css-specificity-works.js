import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function howCssSpecificityWorks() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>CSS How CSS Specificity Works</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/css/">Return to posts</Link></div>
                <h2>CSS: How CSS Specificity Works</h2>
                <p>
                All of the parts and pieces of CSS (selectors and declarations) don't mean much unless you target them in the right manner... enter CSS specificity. 
                </p>
                <h4>How It Works</h4>
                <p>Simply put, CSS specificity allows you target an element in your DOM. Here's how it works:<br />
                Every CSS selector gets a 3 digit score:
                </p>
                <p>
                · If the selector contains an ID reference (#myItem in the example below) then digit #1 of your score gets a +1.<br />
                · If the selector contains a class, pseudo-class or attribute then digit #2 of your score gets a +1 for each occurrence.<br />
                · It the selector contains an element or psuedo-element then give digit #3 of your score a +1 for each occurrence.<br />
                </p>
                <p>EXAMPLE: Let's say you're trying to target a list element in your HTML but you know in the world of CSS there's always a number of different ways to use selectors to style your DOM target. Using the above scoring method you could end up with 2 different scores, but the higher score would be more specific, and consequently applied to your DOM target.</p>
                <p>In the example below you want to apply CSS code to make the only list element on the page blue:</p>
            </div>

            <div className="container">    	
<pre><code>{`<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>CSS Testing</title>
<style>
	#myItem {
		color:blue;
		}
	div > nav > ul > li {
		color:red;
		}
</style>
</head>
<body>
	<div>
		<nav>
			<ul>
				<li id="myItem">My List Item.</li>
			</ul>
		</nav>
	</div>
</body>
</html>
`}
</code></pre>

        <p>The 2 different ways used in the CSS to select and style the text color in the &lt;li&gt; are both valid, but given the scores of each selector:</p>
        <p>#myItem has a score of 100 (1 id value, 0 classes, 0 elements)</p>
        <p>div &gt; nav &gt; ul &gt; li has a score of 004 (0 id values, 0 classes, 4 elements)</p>
        <p>#myItem wins and is more specific, and the text is colored blue. (Give it a try, copy and paste and even play with the order of the selectors (move #myItem to the bottom of the selector list- the text will still be blue)).</p>
        <h4>Why Should I Care?</h4>
        <p>Here's the use case where I gained my CSS Specificity appreciation:</p>
        <p>I was working on an Angular project using PrimeNG controls (those cool panel, form and page layout controls that are available to the application in a simple tag format) and needed to apply styles to DOM objects that were generated by the control after page render and not visible or available before the page request; the API simply did not expose that level of control to manipulate the objects I needed to style.</p>
        <p>With CSS Specificity I was able to target the generated DOM object with my CSS - AFTER the page request, where it seemed impossible to do so with only the control's API.</p>
            </div>
        </div>
    
        )
    }    

export default howCssSpecificityWorks
