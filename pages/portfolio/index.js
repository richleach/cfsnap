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
                        Some Recent Projects
                    </h2>
                    <div className="container flex">
                        <div className="card">
                            <h4>Gen Center</h4>
                            <a href="/demo/gencenter/index.html" target="_blank"><img src="images/portfolioGenCenter.png" alt="Gen Center Site" /></a>
                        </div>
                        <div className="card">
                            <h4>richleach.com</h4>
                            <a href="http://www.richleach.com" target="_blank"><img src="images/portfolioRichLeach.png" alt="richleach.com" /></a>
                        </div>
                        <div className="card">
                            <h4>Next.js Sample</h4>
                            <a href="/demo/nest/index.html" target="_blank"><img src="images/portfolioNest.png" alt="next.js Sample" /></a>
                        </div>
                        <div className="card">
                            <h4>CSS Demo</h4>
                            <a href="/demo/sass-sample/project.html" target="_blank"><img src="images/portfolioHelpNow.png" alt="SCSS Sample" /></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default index