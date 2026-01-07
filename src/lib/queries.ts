"use server"
import prisma from "./prisma"

import { currentUser } from "@clerk/nextjs/server"

export const getAuthUserDetails = async () =>{
    const user = await currentUser() 

    if(!user) return 
    const userData = await prisma.user.findUnique({
        where:{
            email: user.emailAddresses[0].emailAddress
        },
        include:{
            Agency:{
                include:{
                    SidebarOption:true,
                    SubAccount:{
                        include:{
                            SidebarOption:true
                        }
                    }
                }
            },
            Permission:true
        }
    })

    return userData
}