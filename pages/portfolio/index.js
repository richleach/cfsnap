import Link from "next/link";
import Head from 'next/head';

function index() {
    return (
        <div className="docs-main my-4">
        <Head>
            <title>CFSNAP Portfolio Page</title>
          </Head>
            <div className="container">
                <section className="languages">
                    <h2 className="md text-center my-2">
                        Recent Projects
                    </h2>
                    <div className="container flex">
                        <div className="card">
                            <h4>Gen Center</h4>
                            <img src="images/portfolioGenCenter.png" alt="Gen Center Site" />
                        </div>
                        <div className="card">
                            <h4>richleach.com</h4>
                            <img src="images/portfolioRichLeach.png" alt="richleach.com" />
                        </div>
                        <div className="card">
                            <h4>Next.js Sample</h4>
                            <img src="images/portfolioNest.png" alt="next.js Sample" />
                        </div>
                        <div className="card">
                            <h4>CSS Demo</h4>
                            <img src="images/portfolioHelpNow.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default index