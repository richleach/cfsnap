import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsUsememoUsecallbackHooks() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useMemo and useCallback Hooks</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>   
                <h2>React Basics: useMemo &amp; useCallback Hooks</h2>

                <p> useMemo invokes the function then caches result. useCallback caches the function and only runs it if the dependency (included in []) changes (usually a state or props value).</p>

                <p>Basic code to implement useMemo and useCallback hooks. </p>

                <h4>ParentComponent.js</h4>
            </div>

            <div className="container">    	
<pre><code>{`//import this file into App.js
import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'


function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback (() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>
            Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>
            Increment Salary</Button>
        </div>
    )
}

export default ParentComponent `}
</code></pre>

<br /><br />
<h4>Count.js</h4>            	
<pre><code>{`import React from 'react'

function Count({text, count}) {
    return (
        <div>
            {text} is {count}
        </div>
    )
}

export default React.memo(Count) `}
</code></pre>

<br /><br />
<h4>Title.js</h4>           	
<pre><code>{`import React from 'react'

function Title() {
    console.log('Rendering title component');
    return (
        <div>
            <h2>useCallback Hook</h2>
        </div>
    )
}

export default React.memo(Title) `}
</code></pre>

<br /><br />
<h4>Button.js</h4>        	
<pre><code>{`import React from 'react'

function Button({handleClick, children}) {
   
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)	`}
</code></pre>
            </div>
        </div>

        )
    }    

export default reactBasicsUsememoUsecallbackHooks
