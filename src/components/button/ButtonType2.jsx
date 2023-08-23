

const ButtonType2 = ({children,onClick}) => {
  return (
    <button  className="text-md  lg:text-slate-50 lg:border-[3px]  border-emerald-600 lg:py-2 lg:px-8 lg:rounded-3xl cursor-pointer border-dotted font-semibold border-b-2 lg:border-solid text-emerald-600 "  onClick={onClick} >
    {children}
  </button>
  )
}

export default ButtonType2