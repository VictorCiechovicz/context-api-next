'use client'

import { ModalContext } from './modal-context'
import { useState } from 'react'

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  )
}
