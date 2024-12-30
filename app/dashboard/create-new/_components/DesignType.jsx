import Image from 'next/image'
import React from 'react'

function DesignType() {
    const Designs=[
        {
            name:'Modern',
            image:'/star.png',
        }
    ]
  return (
    <div>
        <label className='text-lg font-medium text-gray-500'>Select Interior Design Type</label>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {Designs.map((design,index)=>(
                <div key={index} className='flex items-center justify-between mt-5'>
                    <div>
                        <Image src={design.image} alt={design.name} className='w-100 h-100'/>
                    </div>
                    <div>
                        <h3 className='text-lg font-medium'>{design.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DesignType