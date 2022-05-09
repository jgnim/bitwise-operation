import { useState } from "react"
import styled from "styled-components"
import Result from "../Result"

const Inputs = () => {
  const [operation, setOperation] = useState("AND")  
  const [input1, setInput1] = useState([0,1,1,1,1,0,0,1])
  const [input2, setInput2] = useState([0,1,0,0,1,0,0,0])
  const changeOperation = (e) =>{
    setOperation(e.target.value)
  }
  const changeInput1 = (value,index) => {    
    let newArray = [...input1]    
    value === 1 ? newArray.splice(index,1,0) : 
      newArray.splice(index,1,1)    
    setInput1(newArray)
  }
  const changeInput2 = (value,index) => {    
    let newArray = [...input2]    
    value === 1 ? newArray.splice(index,1,0) : 
      newArray.splice(index,1,1)
    setInput2(newArray)
  }
  return (
    <Container>
      Input 1
      <Input>        
        {input1.map((value,index)=>{          
          return (
            <IndividualInput key={index+1} bit={value} onClick={()=>changeInput1(value,index)}>
            </IndividualInput>
          )
        })}        
      </Input>
      Input 2
      <Input>
        {operation !== "NOT" ? 
          input2.map((value,index)=>{            
            return (
              <IndividualInput key={index+10} bit={value} onClick={()=>changeInput2(value,index)}>
              </IndividualInput>
            )
          }) : 
          input2.map((value,index)=>{            
            return (
              <IndividualInput key={index+10} bit={false} style={{backgroundColor: "black", borderColor: "black"}}>
              </IndividualInput>
            )
          })}        
      </Input>
      <div>
        <div>
          Operation
        </div>
        <Operation>          
          <input type="button" value="AND" onClick={changeOperation} style={{backgroundColor: operation === "AND" ? "#00ADB5" : "transparent"}} />
          <input type="button" value="OR" onClick={changeOperation} style={{backgroundColor: operation === "OR" ? "#00ADB5" : "transparent"}}/>
          <input type="button" value="XOR" onClick={changeOperation} style={{backgroundColor: operation === "XOR" ? "#00ADB5" : "transparent"}}/>
          <input type="button" value="NOT" onClick={changeOperation} style={{backgroundColor: operation === "NOT" ? "#00ADB5" : "transparent"}}/>
        </Operation>
      </div>
      Result
      <Input>        
        {input1.map((value,index)=>{
          return <Result key={index+20} data1={input1[index]} data2={input2[index]} operation={operation}/>
        })}
      </Input>
      <Explanation>
        <div>
          Explanation
        </div>
        <div>
          {operation === "AND" ? `A bitwise AND takes two equal-length binary representations and performs the logical AND operation on each pair of the corresponding bits, by multiplying them. Thus, if both bits in the compared position are 1, the bit in the resulting binary representation is 1 (1 × 1 = 1); otherwise, the result is 0 (1 × 0 = 0 and 0 × 0 = 0).` :
            operation === "OR" ? `A bitwise OR takes two bit patterns of equal length and performs the logical inclusive OR operation on each pair of corresponding bits. The result in each position is 0 if both bits are 0, while otherwise the result is 1.` :
            operation === "XOR" ? `A bitwise XOR takes two bit patterns of equal length and performs the logical exclusive OR operation on each pair of corresponding bits. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1. In this we perform the comparison of two bits, being 1 if the two bits are different, and 0 if they are the same.` :
            `The bitwise NOT, or complement, is a unary operation that performs logical negation on each bit, forming the ones' complement of the given binary value. Bits that are 0 become 1, and those that are 1 become 0.`
          }
        </div>
      </Explanation>      
    </Container>
  )
}

export default Inputs

const Container = styled.div`  
  padding-top: 20px;
`
const Input = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 15px;
`
const IndividualInput = styled.div`
  width: 20px;
  height: 20px;
  border: solid white 1.5px;
  border-radius: 50%;  
  background-color: ${props => props.bit === 1 ? `white` : `none`};
  &:hover {
    cursor: pointer;
  }
`
const Operation = styled.div`
  display: flex;
  width: 200px;
  margin: auto;
  justify-content: space-evenly;
  padding-bottom: 15px;
  input {
    width: 50px;    
    border: none;
    color: white;
    padding: 10px;
    border-radius: 25%;
  }
`
const Explanation = styled.div`
  margin-top: 20px;
  div:first-child{
    font-size: 1.5em;
  }
`

