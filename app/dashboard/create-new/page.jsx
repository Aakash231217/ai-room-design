"use client"
import React from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'

function CreateNew() {
    const onHandleInputChange=(value,fieldName)=>{
        console.log(value,fieldName)

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

            {/* Additional TextArea*/}

            {/*Button to generate image*/}

         </div>
       </div>
   
    </div>
  )
}

export default CreateNew