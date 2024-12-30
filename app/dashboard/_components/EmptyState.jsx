import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
        <Image src={'/star.png'}
        width={200} height={200}/>

        <h2 className='font-medium text-lg text-gray-500'>
            Create your first room design
        </h2>
        <Link href={'/dashboard/create-new'}>
        <Button>
            +Redesign Room
        </Button>
        </Link>
        </div>
  )
}

export default EmptyState