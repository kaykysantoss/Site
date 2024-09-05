import WhiteArrow from '../../src/assets/White-arrow.svg'

function Button ({ arrow, loading, children, ...props}) {
    return (
        <button className="bg-[#1D1D1D] text-white  rounded-2xl font-semibold flex p-[15px] gap-5 items-center cursor-pointer ease-out duration-300" {...props}>
            {children} {arrow && <img src={WhiteArrow} />}
        </button>
    )
}

export default Button