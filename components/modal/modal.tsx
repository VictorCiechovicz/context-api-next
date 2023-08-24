'use client'

import { Smile } from 'lucide-react'

import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import { ModalContext } from './modal-context'
import { useContext } from 'react'

export function Modal() {
  const { show, setShow } = useContext(ModalContext)

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
        <DialogHeader onClick={() => setShow(false)}></DialogHeader>
        <Smile size={80} color="green" />
      </DialogContent>
    </Dialog>
  )
}
