"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <h2 className="text-4xl font-bold mb-4">Oops! Something went wrong</h2>
      <p className="text-xl mb-8">Our spelling wizards are working on it!</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}