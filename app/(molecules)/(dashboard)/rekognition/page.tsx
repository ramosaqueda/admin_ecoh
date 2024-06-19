'use client'

import {RekognitionClient, CompareFacesCommand,} from '@aws-sdk/client-rekognition'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'

const Rekognition = () => {
  const router = useRouter()

  

  useEffect(() => {
    // por definir
  }, [])

  return <p>Hello am Rekognition Page</p>
}

export default Rekognition