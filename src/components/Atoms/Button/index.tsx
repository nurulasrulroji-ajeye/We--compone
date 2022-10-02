import React from 'react'


type Props = {
  title: string,
  disable?: boolean
}

const Button = (props : Props) => {
  return (
  <button className='py-[14px] px-[34px] bg-[#4A4A4A] hover:bg-black hover:shadow-[5px_5px_rgba(74,74,74,1)] transition duration-500 ease-in-out text-sm text-white font-Popins font-medium' disabled={props.disable}>
    {props.title}
  </button>
  )
}

export default Button