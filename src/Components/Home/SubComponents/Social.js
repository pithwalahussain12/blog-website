import React from 'react'

const Social = ()=>{

  const icons = [
    { className: 'fab fa-facebook-square left-s', url: 'https://www.facebook.com/mgdagostini/' },
    { className: 'fab fa-linkedin-in left-s', url: 'https://www.linkedin.com/in/andreadagostini' },
    { className: 'fab fa-twitter left-s', url: 'https://twitter.com/mrdagostini?lang=en' },
    { className: 'fab fa-youtube left-s', url: 'https://www.youtube.com/channel/UCpNMuu_0mdAZY9eeuNymiwQ/videos' },
    { className: 'fab fa-instagram left-s', url: 'https://www.instagram.com/mrdagostini/?hl=en' },
    { className: 'fas fa-envelope-open left-s', url: '/' }
  ]

  return(
    <div className="social">
      <div className="row">
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-6 col-md-6 social-block flex" style={{ justifyContent: 'end'}}>
          <p className="socialLabel">ALWAYS STAY<br/>CONNECTED</p>
          { icons.map((e, i)=>(
            <IconLink key={ i } { ...e } />
          )) }
        </div>
        <div className="col-lg-4 col-md-4 social-block flex" style={{ justifyContent: 'center' }}>
          <p className="socialLabel custom-para" style={{ marginRight: '30px' }}>KEEP YOURSELF<br/>UPDATED</p>
          <button className="btn btn-primary border0 socialBtn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

const IconLink = ({ className, url })=>(
  <a href={ url }>
    <i className={`socialIcon ${ className }`}></i>
  </a>
)

export default Social
