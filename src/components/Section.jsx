const Section = ({ children, title}) => {
  return (
    <div className="">
      <h1>{title}</h1>
    <div>
      { children }
    </div>
    </div>
  )
}

export default Section