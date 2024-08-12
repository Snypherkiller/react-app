import main from '../assets/images/proud.svg.svg'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/Testing'
import Logo from '../components/Logo' 


const Landing = () => {
  return (
    <Wrapper>
    <div>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus, nisl ac aliquam pulvinar,
             metus velit ornare ligula, sed pulvinar lectus neque eu augue. Pellentesque auctor, quam eu porta elementum,
              neque magna posuere augue, in malesuada sapien diam ac felis. best performance
            </p>
            <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job-hunt' className='img main-img'/>
      </div>
    </div>
    </Wrapper>
  )
}



export default Landing