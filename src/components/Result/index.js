import styled from "styled-components"
import { useEffect, useState } from "react"
const Result = ({data1, data2, operation}) => {
  const [output, setOutput] = useState()  
  useEffect(()=>{
    if (operation === "AND") {
      setOutput(data1 &= data2)
    }
    else if (operation === "OR") {
      setOutput(data1 |= data2)
    }
    else if (operation === "XOR") {
      setOutput(data1 ^= data2)
    }
    else {      
      //NOT of 0001 gives 1110 which is -2 in decimal. It is -2 because 2 in binary is 0010, the negative is bitwise NOT+1, 1101+1 = 1110
      ~data1 === -2 ? setOutput(0) :
        setOutput(1)
    }
  },[data1, data2, operation])
  return (
    <Container bit={output}>      
    </Container>
  )
}

export default Result

const Container = styled.div`
  width: 20px;
  height: 20px;
  border: solid white 1.5px;
  border-radius: 50%;  
  background-color: ${props => props.bit === 1 ? `white` : `none`};
  &:hover {
    cursor: pointer;
  }
`