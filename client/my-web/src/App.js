import Landing from "./pages/landing";
import styled from 'styled-components'

const Button =styled.button
`
  background:red;
  color: white;
  font-size: 1rem

`
const ButtonSec = styled.button`

background:blue;
color:white;
font-size:1rem;

`



function App() 
{
  return (
  <div>
    <Button className="jonny">Click me</Button>
    <ButtonSec>Click me</ButtonSec>
    <h1>Jobify</h1>
  
    <Landing/>
  </div>
    
  )
}

export default App;
