import React from 'react'

const Button = ({title , id , rightIcon , leftIcon , containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Button