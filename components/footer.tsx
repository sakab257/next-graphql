import React from 'react'
import  {montserrat} from'@/lib/font'

const Footer = () => {
  return (
    <div className={`w-full h-15 grid place-items-center border-t-3 border-black ${montserrat.className}`}>{`© 2025 Salim Bouskine - Tous droits réservés`}</div>
  )
}

export default Footer
