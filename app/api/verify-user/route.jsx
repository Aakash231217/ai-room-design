import { NextResponse } from "next/server";
import {Users} from "../../../config/schema";
import {eq} from "drizzle-orm";
import {db} from "../../../config/db";
import { User } from "lucide-react";
export async function POST(req) {
    const {user} = await req.json();

    //if user already exists
    try{
     const userInfo=await db.select().from(Users)
     .where(eq(Users.email,user?.primaryEmailAddress,emailAddress))

     if(userInfo?.length==0){
        const SaveResult = await db.insert(Users)
        .values({
            name:user?.fullName,
            email:user?.primaryEmailAddress.emailAddress,
            imageUrl:user?.imageUrl,

        }).returning({Users})
        return NextResponse.json({'result':SaveResult[0].Users})
     }
     return NextResponse .json({'result':userInfo});   

    }
    catch(e){
       return NextResponse.json({error:e});
    }
}