import Image from 'next/image'
import React from 'react'

function DesignType(selectedDesignType) {
    const Designs=[
        {
            name:'Modern',
            image:'/star.png',
        }
    ]
    const [selectedOption, setSelectedOption] = React.useState();
  return (
    <div className='mt-5'>
        <label className='text-lg font-medium text-gray-500'>Select Interior Design Type</label>
        <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {Designs.map((design,index)=>(
                <div key={index} onClick={()=>{setSelectedOption(design.name); selectedDesignType(design.name)}}>
                    <div>
                        <Image src={design.image} width={100} height={100} className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${design.name==selectedOption && 'border-2 border-primary rounded-md'}`}/>
                        <h2>{design.name}</h2>
                    </div>
                    <div>                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DesignType