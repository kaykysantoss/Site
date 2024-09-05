import { Link } from 'react-router-dom'

import Logo from '../assets/dnc-logo.svg'
import BrazilIcon from '../assets/brasil-icon.svg'
import UsaIcon from '../assets/usa-icon.svg'
import FacebookIcon from '../assets/facebook.svg'
import TwitterIcon from '../assets/twitter.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import InstagramIcon from '../assets/instagram.svg'

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="flex">
                    <div className="">
                        <img src={Logo} className="text-[25px] m-[25px] text-[#4D5053]"/>
                        <p>
                            A escola que prepara você para as <br/> profissões em alta no mercado de <br/> trabalho.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://google.com" target="_blank">
                                <img src={FacebookIcon} />
                            </a>    
                            <a href="https://google.com" target="_blank">
                                <img src={TwitterIcon} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={LinkedinIcon} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={InstagramIcon} />
                            </a>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="">
                            <h3 className="font-semibold text-[25px]">Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>    
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-semibold text-[25px] ">Contact</h3>
                            <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p>suporte@escoladnc.com.br</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between m-[155px]">
                    <p>Copyright © DNC - 2024</p>
                    <div className="flex gap-3">
                        <img src={BrazilIcon} />
                        <img src={UsaIcon} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer