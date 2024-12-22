
interface Props{
    label:string
    value:string | number | null
}

export function Infor({label, value}:Props){
    return (
        <>
            <section className="flex w-full items-center">
            <span className="mr-4 w-[10rem]">{label}</span>
            <span>{value ?? '-'}</span>

            </section>
    </>
    )
}