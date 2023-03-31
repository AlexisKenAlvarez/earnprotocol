import React from 'react'

const Button = (props) => {

    const { className } = props

    return (
        <button className={`w-fit h-auto px-8 py-3 bg-gradient-to-br from-[#6C41B4]/50 to-[#003F39]/50 border-[1px] border-purple hover:bg-purple transition-background ease-in-out duration-300 backdrop-blur-md ${className}`}>
            {props.children}
        </button>
    )
}

export default Button