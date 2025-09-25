import './App.css'
import FirstComponent from './components/FirstComponent'
import Botao from './components/Botao'
import Tabela from './components/Tabela'
import Flexbox from './components/Flexbox'
import ShowUsername from './components/ShowUsername'
import TemplateExpression from './components/TemplateExpression'
import Click from './components/Click'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ComponenteEstilizado from './components/ComponenteEstilizado'
const cars = [
  { id: 1, Brand: "ferrari", color: "red", km: 12 },
  { id: 2, Brand: "dus", color: "blue", km: 122 },
  { id: 3, Brand: "tre", color: "green", km: 132 }
]
function App() {
  return (
    <div>
      <h1>Aprendendo sobre React</h1>
      <h2>Primeira lição importando components</h2>
      <FirstComponent />
      <Botao />
      <Tabela />
      <TemplateExpression />
      <Click />
      <ListRender />
      <ConditionalRender />
      <ShowUsername name="Luiz" />
      <CarDetails Brand="WV" km={102} color="red" />
      {cars.map((car) => (
        <CarDetails key={car.id} Brand={car.Brand} color={car.color} km={car.km}/>
      ))}
      <Fragment />
      {/* 13 - children prop */}
      <Container>
        <p>Eu sou do componente superior</p>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>
      <ComponenteEstilizado />
      <p style={{color:'blue'}}>Estilo Inline</p>


    </div>
      )
}

      export default App
