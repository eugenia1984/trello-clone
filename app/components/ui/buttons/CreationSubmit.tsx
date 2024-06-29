"use client"

import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"

import { Loader2 } from "lucide-react"

export const CreationSubmit = () => {
  const { pending } = useFormStatus()

  return (
    <>
      {
        pending ?
          (<Button disabled size="lg">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
          </Button >)
          :
          (<Button type="submit" size="lg">
            Next
          </Button >)
      }
    </>
  )
}