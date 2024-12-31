"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
function CreateNew() {
    const[formData,setFormData]=React.useState([]);
    const onHandleInputChange=(value,fieldName)=>{
        setFormData(prev=>({...prev,[fieldName]:value}))
        

    }
  return (
    <div>
        <h2 className='font-bold  text-4xl text-primary text-center'>Experience the magic of AI Remodelling</h2>
        <p className='text-center text-gray-500'>Transform any room with a click. Select a space </p>
       <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
         <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>
          
         {/* Form Input Selection*/}
         <div>
            {/*Room type */}
            <RoomType  selectedRoomType={(value)=>onHandleInputChange(value,'roomType')}/>

            {/* Design type*/}
            <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}/>

            {/* Additional TextArea*/}
            <AdditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value,'additionalReq')}/>

            {/*Button to generate image*/}
            <Button className="w-full mt-5">Generate</Button>
            <p className='text-sm text-gray-400 mb-52'>Note: 1Credit will be used to generate to redesign your room</p>
         </div>
       </div>
   
    </div>
  )
}

export default CreateNew