import Head from 'next/head'

function search() {
    return (
        <div>
            <Head>
                <script async src="https://cse.google.com/cse.js?cx=cdca5de95cfe42a5a" type="text/javascript"></script>
            </Head>
            <div className="gcse-searchbox"></div> 
        </div>
    )
}

export default search