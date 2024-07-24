const Section = ({ children, title, options}) => {
  return (
    <div className="text-black font-bold font-oswald text-3xl">
      <h2>{title}</h2>
      <h3>{options}</h3>
    <div>
      { children }
    </div>
    </div>
  )
}

export default Section