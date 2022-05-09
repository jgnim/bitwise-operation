import styled from 'styled-components'
import Inputs from '../Inputs'
const MainApp = () => {
  return (
    <Container>
      <header>
        Bitwise Operation
      </header>
      <div>
        <div>
          In digital computer programming, a bitwise operation operates on one or more bit patterns or binary numerals at the level of their individual bits.
        </div>        
        <div>
          It is a fast, simple action directly supported by the processor, and is used to manipulate values for comparisons and calculations.
        </div>        
      </div>
      <Inputs />
    </Container>
  )
}

export default MainApp

const Container = styled.div`
width: 500px;
margin: auto;
margin-top: 40px;
header {
  font-size: 2em;
}
div {  
  margin-top: 10px;
}
@media (max-width: 500px) {
    width: 100%;
}
`