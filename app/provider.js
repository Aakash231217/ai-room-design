"use client"
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({children}){

    const {user} = useUser();
    const [userDetail,setUserDetail] = useState([]);
    
    useEffect(()=>{
        if(user){
            verifyUser();
        }
    },[user]);

    const verifyUser = async () => {
        try {
            const dataResult = await axios.post('/api/verify-user', {
                user: user,
            });
            setUserDetail(dataResult.data.result);
        } catch (error) {
            console.error("Error verifying user:", error);
        }
    };

    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            {children}
        </UserDetailContext.Provider>
    );
}

export default Provider;