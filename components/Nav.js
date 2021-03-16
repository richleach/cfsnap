import Link from 'next/link'

function Nav() {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo"><Link href='/'>cfsnap</Link></h1>
                <nav>
                    <ul>
                        <li><Link href='/react/'>React</Link></li>
                        <li><Link href='/javascript'>Javascript</Link></li>
                        <li><Link href='/css'>CSS</Link></li>
                        <li><Link href='/portfolio'>Portfolio</Link></li>
                        <li><Link href='/contact'><a>Contact</a></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
