import { useEffect, useRef } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

interface Props {
  message: string | JSX.Element
  isOpen: boolean
  onClose: () => void
  btnFunction?: () => void
}

export default function ModalError({
  message,
  isOpen,
  onClose,
  btnFunction = onClose,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null)
  if (!btnFunction) btnFunction = onClose

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && isOpen) {
        btnFunction()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, btnFunction, onClose])

  if (!isOpen) return null

  return (
    <div
      id={'idContainerModalFeedback'}
      className="fixed inset-x-0 bottom-0 z-50 flex size-full items-center justify-center bg-black/75 text-black focus:outline-none"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        ref={modalRef}
        className="z-50 max-h-[85vh] w-4/5 overflow-y-auto  overflow-x-hidden rounded bg-white p-3 text-center shadow-lg md:w-auto md:p-5"
      >
        <section className="flex">
            <section className="mb-4 flex">
              <IoMdCloseCircle
                fill="#b81414"
                className="size-6 hover:brightness-90 md:size-7"
              />
              <span className="pl-2 text-sm md:pl-5 md:text-base">
                {message}
              </span>
            </section>
        </section>
        <button
          className={`px-10 py-2 text-sm md:px-16 md:text-base bg-primary rounded-md font-bold text-white`}
          onClick={btnFunction}
        >
          OK
        </button>
      </div>
    </div>
  )
}
