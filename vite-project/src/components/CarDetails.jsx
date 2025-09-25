const CarDetails = ({Brand, km, color}) => {
  return (
    <div>
        <h1>detalhes</h1>
        <ul>
            <li>{Brand}</li>
            <li>{km}</li>
            <li>{color}</li>
        </ul>
    </div>
  )
}

export default CarDetails