import { NextResponse } from "next/server";
import { Users } from "../../../config/schema";
import { eq } from "drizzle-orm";
import { db } from "../../../config/db";

export async function POST(req) {
    const { user } = await req.json();
    
    try {
        const userInfo = await db.select().from(Users)
            .where(eq(Users.email, user?.emailAddresses[0]?.emailAddress));
        
        if (userInfo?.length === 0) {
            const SaveResult = await db.insert(Users)
                .values({
                    name: `${user?.firstName || ''} ${user?.lastName || ''}`.trim(),
                    email: user?.emailAddresses[0]?.emailAddress,
                    imageUrl: user?.profileImageUrl || null,
                }).returning();
            
            return NextResponse.json({ result: SaveResult[0] });
        }
        return NextResponse.json({ result: userInfo[0] });
    } catch(e) {
        console.error('DB Error:', e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}