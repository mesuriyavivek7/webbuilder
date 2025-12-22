import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Navigation from '@/components/site/navigation'

function layout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider appearance={{baseTheme:dark}}>
    <main className='h-full'>
        <Navigation></Navigation>
        {children}
    </main>
    </ClerkProvider>
  )
}

export default layout