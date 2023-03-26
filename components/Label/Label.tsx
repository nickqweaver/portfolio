export const Label = (props: { name: string }) => {
  return (
    <div className="flex justify-center items-center text-links text-[10px] sm:text-xs md:text-sm py-1 px-2 font-semibold border-2 border-light-blue rounded-2xl">
      {props.name}
    </div>
  )
}
