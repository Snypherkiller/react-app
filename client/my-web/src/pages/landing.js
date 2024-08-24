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
            This is a mistake. Here, we’ll refer to some time-honored typesetting conventions, with an emphasis on readability, and offer guidance on adapting them effectively for devices and screens. We’ll see that the ability to embed fonts with @font-face is not by itself a solution to all of our typographic challenges.
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