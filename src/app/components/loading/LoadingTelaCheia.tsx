
interface Props {
  loading: boolean
}

export default function LoadingTelaCheia({
  loading,
}: Props) {
  return (
    <>
      {loading ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 text-black"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            className={`${!loading && `bg-white shadow-lg`}  max-h-[85vh] w-4/5 overflow-y-auto overflow-x-hidden 
        rounded p-8 text-left  md:w-auto `}
          >
        <div className={`animate-spin rounded-full h-16 w-16 border-t-4 border-white border-solid border-transparent`}></div>

          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
