import { Link } from "react-router-dom";
import Button from "./Button";



function Hero() {
    return (
        <div className="bg-[url('../../public/Hero.png')] bg-center bg-cover rounded-[70px] h-[758px] ml-[250px] p-[50px] mt-10 ">
            <div className="w-[40%] font-serif ">
                <h1 className="text-[65px] leading-[125%] mt-[170px] mb-3">
                    Let Your Home Be Unique
                </h1>
                <p className="mb-3">  
                    There are many variations of the passages of<br/>
                    lorem Ipsum fromavailable, majority
                </p>
                <Link>
                    <Button arrow>
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero