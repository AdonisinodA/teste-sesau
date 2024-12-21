import { AxiosError } from 'axios'
import { useState } from 'react'
import FeedBackModal from '../components/ModalError'

export function useModalError() {
  const [messageError, setMessageError] = useState<string | JSX.Element>('')
  const [openError, setOpenError] = useState<boolean>(false)

  function handleError(error: unknown) {
    console.error(error)
    if (error instanceof AxiosError) {
      setMessageError(error.response?.data.message ?? 'Erro interno.')
      setOpenError(true)
    } else if (error instanceof TypeError) {
      setMessageError('Erro interno')
      setOpenError(true)
    } else if (error instanceof Error) {
      setMessageError(error.message ?? 'Erro interno.')
      setOpenError(true)
    }
  }

  

  function ModalError() {
    return (
      <FeedBackModal
        btnFunction={() => setOpenError(false)}
        isOpen={openError}
        message={messageError}
        onClose={() => setOpenError(false)}
      />
    )
  }

  return {
    ModalError,
    handleError,
    statusModalError: openError,
    setOpenError,
  }
}
