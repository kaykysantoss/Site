import LikedFilled from '../assets/like-filled.svg'


function ProjectsList(props) {
    return (
        <div className="text-center font-serif m-[150px] ">
            <div className=" w-full h-full m-[100px] max-w-[767px] ml-[350px]">
                <h2 className="text-[50px]">Follow Our Projects</h2>
                <p className="text-[22px] mt-2">
                    It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
                </p>
            </div>
            <div className="grid grid-cols-4 gap-5">
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div><div className="flex justify-center items-center flex-col">
                    <div className="bg-center bg-cover rounded-[37px] h-[430px] w-[100%] bg-gray-200"></div>
                    <h3 className="mt-3">João Silva</h3>
                    <p>PB, Brasil</p>
                    <img src={LikedFilled} height="20px" />
                </div>
            </div>
           
        </div>
    )
}

export default ProjectsList