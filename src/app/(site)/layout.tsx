import NavBar from '@/components/main/NavBar'
import React from 'react'

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto h-screen w-screen">
        {children}
        </div>
    </div>
  )
}

export default SiteLayout