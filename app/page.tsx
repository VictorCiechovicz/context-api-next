'use client'
import { useContext } from 'react'
import { ModalContext } from '@/components/modal/modal-context'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { setShow } = useContext(ModalContext)
  return (
    <div className="flex flex-col space-y-10 mt-10 justify-center items-center">
      <h1>Open Modal!</h1>
      <Button onClick={() => setShow(true)}>Open</Button>
    </div>
  )
}
