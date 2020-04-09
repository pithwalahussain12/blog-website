import React, { useState } from 'react'

const SubscribeForm = ()=>{
  const [email, setEmail] = useState('')

  const submitForm = (e)=>{
    e.preventDefault()

  }

  return(
    <div className="subscribeForm">
      <form method="post" onSubmit={ submitForm } className="form-inline text-center container">
        <label>Get in touch and stay updated with our news and events</label>
        <input
          type="text"
          className="form-control border0"
          placeholder="johndoe@gmail.com"
          onChange={ (e)=> setEmail(e.target.value) }
          value={ email }
        />
        <div className="input-group-append">
          <input className="btn btn-success border0" type="submit" value="SUBSCRIBE" />
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm
