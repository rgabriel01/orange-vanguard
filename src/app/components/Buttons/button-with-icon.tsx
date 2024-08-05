interface ButtonWithIconProps {
  icon: any
  text: string
  active: boolean
}
const ButtonWithIcon = ({
  icon,
  text,
  active
}: ButtonWithIconProps) => {
  const toggleClassNames = active ? 'text-white bg-sky-500' : 'text-sky-500 bg-white';
  const className = `py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg border border-sky-500 ${toggleClassNames}`;

  return (
    <button
      type='button'
      className={className}
    >
      <div className='flex flex-wrap content-center flex-row gap-x-1'>
        {icon}
        {text}
      </div>
    </button>
  )
}

export default ButtonWithIcon;
