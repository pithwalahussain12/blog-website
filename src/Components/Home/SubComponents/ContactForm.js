import React, { useState, useEffect } from 'react'

const ContactForm = ()=>{
  const [payload, setPayload] = useState({
    first_name: '',
    last_name: '',
    email: '',
    website: '',
    phone_no: '',
    message: '',
    schedule_a_call: ''
  })

  const [phone, setPhone] = useState({
    code: '+1',
    number: ''
  })

  const setter = (key, value)=>{
    setPayload({
      ...payload,
      [key]: value
    })
  }

  useEffect(()=>{
    if(phone && phone.code && phone.number){
      setter('phone_no', `${ phone.code } ${ phone.number }`)
    }
  }, [phone])

  const onSubmit = (e)=>{
    e.preventDefault()

  }

  return(
    <form method="post" onSubmit={ onSubmit } className="contactForm">
      <h3 className="clipTitle">GET IN TOUCH</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control contactInput brBottom"
              onChange={ (e)=>setter('first_name', e.target.value) }
              value={ payload.first_name }
              placeholder="First Name*"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              className="form-control contactInput brBottom"
              onChange={ (e)=>setter('email', e.target.value) }
              value={ payload.email }
              placeholder="Email Address*"
            />
          </div>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <select
                className="form-control contactInput brBottom"
                onChange={ (e)=>setPhone({ ...phone, code: e.target.value}) }
                value={ payload.phone_no.code }
              >
                <option>+1</option>
                <option>+91</option>
              </select>
            </div>
            <input
              type="number"
              className="form-control contactInput brBottom"
              onChange={ (e)=>setPhone({ ...phone, number: e.target.value}) }
              value={ payload.phone_no.number }
              placeholder="Phone Number"
            />
          </div>
          <div className="input-group mb-6">
            <div className="input-group-prepend">

            </div>
            <input
              type="date"
              className="form-control cpntact-l contactInput brBottom"
              onChange={ (e)=>setter('schedule_a_call', e.target.value) }
              value={ payload.schedule_a_call }
              placeholder="Schedule a call"
            />
            <i className="fas fa-calendar-day custom-icon"></i>
            
          </div>
          <div className="form-group">
            <input type="submit" value="SUBMIT" className="contactSubmit btn btn-primary"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control contactInput brBottom"
              onChange={ (e)=>setter('last_name', e.target.value) }
              value={ payload.last_name }
              placeholder="Last Name*"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="url"
              className="form-control contactInput brBottom"
              onChange={ (e)=>setter('website', e.target.value) }
              value={ payload.website }
              placeholder="Website"
            />
          </div>
          <div className="form-group mb-4">
            <label style={{ color: '#979797', fontFamily: 'Lato Regular' }}>Message</label>
            <textarea
              className="form-control contactTextArea brBottom"
              onChange={ (e)=>setter('message', e.target.value) }
              value={ payload.message }
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
