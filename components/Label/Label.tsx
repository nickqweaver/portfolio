export const Label = (props: { name: string }) => {
  return (
    <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
      {props.name}
    </div>
  )
}
