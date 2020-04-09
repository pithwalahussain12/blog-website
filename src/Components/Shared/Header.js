import React, { useState, useEffect } from 'react'

const Header = ()=>{
  const [pos, setPos] = useState(0)

  const links = [
  
    { label: 'PODCAST', url: '/' },
    { label: 'BLOG', url: '/' },
    { label: 'EVENTS', url: '/' },
    { label: 'CONTACT', url: '/' },
    { label: 'STORY', url: '/' },
    { label: 'CHARITY', url: '/' },
   
  ]

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setPos(window.pageYOffset)
    })
  }, [])

  return(
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
      <a className="navbar-brand" href="#a">
        <img src="/img/header.jpg" className="img-custom img-header"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
              <a className="nav-link active" href="">Home</a>
            </li>
          { links.map((e, i)=>(
            <li key={ i } className="nav-item">
              <a className="nav-link" href={ e.url }>{ e.label }</a>
            </li>
          ))}
          <li className="nav-item dropdown">
            <a className="nav-link" href="#a" id="navbardrop" data-toggle="dropdown">
              <i className="fas fa-globe-americas"></i> English
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#a">English</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">
              <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
   
  )
}

export default Header
