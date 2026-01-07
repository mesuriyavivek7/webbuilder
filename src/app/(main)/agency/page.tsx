import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

type Props = {}

const Page = async (props: Props) => {
  const authUser = await currentUser()
  if(!authUser) redirect('/sign-in')
  
  return (
    <div>Agency</div>
  )
}

export default Page