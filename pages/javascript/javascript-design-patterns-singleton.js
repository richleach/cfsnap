import { useEffect } from 'react';
import Link from "next/link";

function javascriptDesignPatternsSingleton() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
            <div className="container">
            <div className="btn btn-primary"><Link href="/javascript/">Return to posts</Link></div>
                <h2>Javascript Design Patterns - Singleton</h2>
                <p>
                Some would argue that the Singleton is a glorified global variable, and if you think of it that way it may help you understand it a little more easily. 
                A lot of devs cr@p all over it but this guy makes light of a use case or two where it's use makes sense. https://www.youtube.com/watch?v=sJ-c3BA-Ypo
</p>
<p>Essentially you use the Singleton as a class or resourece where you want to share its contents among other objects in your application, so you only ever create one instance of it and share it among those other objects. 
    You'll see application level counters, variables for system wide health and reporting, among others as likely Singleton candidates.</p>

    <p>USAGE: Copy and paste the code samples below into your own Javascript application and run. I've commented the files within the code for clarification.</p>

            </div>

            <div className="container">    	
<pre><code>{`//FANCYLOGGER.JS!
class FancyLogger {
  constructor() { //only ever create just 
  one instance of this class...
    if (FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this  /*"this" 
      returns the current instance that was 
      created the first time the code ran*/
    }
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log('FANCY: ' +{message})
  }

  printLogCount() {
    console.log({this.logs.length} + ' Logs')
  }
}

const logger = new FancyLogger()  
//this is the actual single instance of FancyLogger
Object.freeze(logger) 
//freeze() prohibits any changes to this single 
//instance by our code export default logger 
//export the instance of the logger variable,  
//not the class file (keep it Singleton)
`}
</code></pre><br /><br />

<pre><code>{`//FIRSTUSE.JS
import logger from './fancyLogger.js' 
//not importing the class, 
//only the one instance we created

export default function logFirstImplementation() {
  logger.printLogCount()  
  //where ever we see the "logger" reference 
  //we're calling the imported instance
  logger.log('First File')
  logger.printLogCount()
}
`}
</code></pre><br /><br />

<pre><code>{`//SECONDUSE.JS
import logger from './fancyLogger.js' 
//not importing the class, 
//only the one instance we created

export default function logFirstImplementation() {
  logger.printLogCount() 
  //where ever we see the "logger" reference 
  //we're calling the imported instance
  logger.log('Second File')
  logger.printLogCount()
}
`}
</code></pre><br /><br />

<pre><code>{`//INDEX.JS
import logFirstImplementation from './firstUse.js'
import logSecondImplementation from './secondUse.js'

logFirstImplementation() 
//call the method from the imported file
logSecondImplementation() 
//call the method from the imported file
`}
</code></pre><br /><br />

            </div>
        </div>

        )
    }    

export default javascriptDesignPatternsSingleton
