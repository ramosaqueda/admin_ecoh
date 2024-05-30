'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'

const Collections = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [collections, setCollections] = useState([])

  const getCollections = async () => {
    // por definir
  }

  useEffect(() => {
    // por definir
  }, [])

  return <p>Hello am Collections Page!</p>
}

export default Collections
