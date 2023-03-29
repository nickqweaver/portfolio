export const Pill = (props: { name: string }) => {
  return (
    <span className="bg-[#EEEEEE] py-[2px] px-[6px] rounded-full text-[11px] text-[#444444]">
      {props.name}
    </span>
  )
}
