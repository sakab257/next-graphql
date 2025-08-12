'use client'
import { useState, useEffect } from 'react'

export default function SimpleDate() {
  const [date, setDate] = useState('')

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long', 
      year: 'numeric'
    })
    setDate(formattedDate)
  }, [])

  return <p className='text-lg capitalize'>{date}</p>
}