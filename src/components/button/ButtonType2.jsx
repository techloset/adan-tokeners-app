

const ButtonType2 = ({children,onClick}) => {
  return (
    <button  className="text-md border-emerald-600   lg:text-slate-50 lg:border-[3px]   lg:py-2 lg:px-8 lg:rounded-3xl xl:text-slate-50 xl:border-[3px]  xl:py-2 xl:px-8 xl:rounded-3xl cursor-pointer border-dotted font-semibold border-b-2 lg:border-solid xl:border-solid text-emerald-600 "  onClick={onClick} >
    {children}
  </button>
  )
}

export default ButtonType2