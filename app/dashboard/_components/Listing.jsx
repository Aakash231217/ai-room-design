"use client"
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '@/components/ui/button';
import EmptyState from './EmptyState';

function Listing() {
    const {user}=useUser();
    const [userRoomList, setUserRoomList] = useState([]);
  return (
    <div>
        <div className='flex justify-between'>
        <h2 className='font-bold text-3xl'>Hello {user?.fullName}</h2>
        <Button>
            +Redesign Room
        </Button>
        </div>
        {/*Empty State*/}
        {userRoomList?.length==0?
            <EmptyState/>:
        <div>

        </div>
        }
    </div>
  )
}

export default Listing