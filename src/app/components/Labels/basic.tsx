interface BasicProps {
  caption: string
  classnames?: string
}

const Basic = ({ caption, classnames }: BasicProps) => {
  const baseClassnames = ' text-xs border-2 rounded p-1 text-center text-gray-500';
  const classes = classnames ? `${baseClassnames} ${classnames}` : baseClassnames;

  return (
    <div className={classes}>
      {caption}
    </div>
  )
}

export default Basic;
