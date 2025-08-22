import Image from 'next/image'
import React from 'react'

export default function Searchbox({ containerClassName = "", inputProps = {} }) {
  return (
    <div className={`relative top-11 z-1 w-[90%] max-w-[520px] flex px-4 py-5 bg-white border-1 border-[#22252E] items-center overflow-hidden gap-3 ${containerClassName}`}>
      <Image src="/assets/icons/Search.svg" height={24} width={24} className='h-[24px] w-[24px]' alt="SearchIcon"/>
      <input
        placeholder='Search'
        className='outline-0 font-satoshi font-[400] text-[16px] flex-1 truncate'
        {...inputProps} />
    </div>
  )
}
