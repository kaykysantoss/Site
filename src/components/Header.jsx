import { Link } from "react-router-dom";

import Logo from '../assets/dnc-logo.svg'

function Header () {
    return (
        <header>
            <div className="">
                <div className="items-center flex justify-between p-5 ml-5">
                    <Link to="/"><img src={Logo}/></Link>
                    <nav>
                        <ul className="flex gap-6 text-[#4D5053] text-[20px] ">
                            <li className="hover:text-[#0c70f2]"><Link to="/">Home</Link></li>
                            <li className="hover:text-[#0c70f2]"><Link to="/about">About</Link></li>
                            <li className="hover:text-[#0c70f2]"><Link to="/projects">Projects</Link></li>
                            <li className="hover:text-[#0c70f2]"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header