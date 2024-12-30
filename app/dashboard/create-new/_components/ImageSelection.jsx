"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

function ImageSelection(selectedImage) {
    const[file,setFile] = useState();

    const onFileSelected = (event) => {
        // Set the file state with the selected file
        setFile(event.target.files[0]);
        selectedImage(event.target.files[0]);
    }

    return (
        <div>
            <label>Select image of your room</label>
            <div className='mt-3'>
                <label htmlFor='upload-image'>
                    <div className={`p-28 border rounded-xl 
                        border-dotted flex justify-center 
                        border-primary 
                        bg-slate-200 cursor-pointer
                         hover:shadow-lg
                          ${file && 'p-0 bg-white'}`}>
                        {!file ? 
                            <Image src={'/star.png'} width={70} height={70}/> :
                            <Image 
                                src={URL.createObjectURL(file)} 
                                width={300} 
                                height={300}
                                className='w-[300px] h-[300px] object-cover'
                                alt="Uploaded room image"
                            />
                        }
                    </div>
                </label>
                <input 
                    type='file'
                    accept='image/*' 
                    id="upload-image"
                    style={{display:'none'}}
                    onChange={onFileSelected}
                />
            </div>
        </div>
    )
}

export default ImageSelection