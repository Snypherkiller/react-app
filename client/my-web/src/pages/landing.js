import React from 'react'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
const landing = () => {
  return (
    <div>
      <main>
        <nav>
            <img src={logo} alt='jobify' className='logo'/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    job <span> tracking </span> app
                </h1>
                <p>
                I'm baby forage vegan YOLO, lomo ramps sartorial praxis. Fingerstache whatever man braid, health goth farm-to-table drinking vinegar iPhone humblebrag. Stumptown tofu polaroid leggings literally pickled chartreuse organic vegan post-ironic aesthetic tumeric forage. Semiotics yuccie four loko kinfolk mustache franzen scenester ennui XOXO shabby chic pinterest. Health goth slow-carb man braid, seitan af tonx coloring book cardigan affogato air plant woke.
                </p>
                <button className='btn btn-hero'>
                    Login/Register
                </button>
                <img src={main} alt='Job-hunt' className='img main-img' />
            </div>
        </div>
      </main>
    </div>
  )
}

export default landing
