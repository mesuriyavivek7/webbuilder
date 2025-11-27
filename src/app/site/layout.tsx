import React from 'react'
import Navigation from '@/components/site/navigation'

function layout({children}: {children: React.ReactNode}) {
  return (
    <main className='h-full'>
        <Navigation></Navigation>
        {children}
    </main>
  )
}

export default layout