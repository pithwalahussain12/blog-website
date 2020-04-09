import React, { Fragment } from 'react'
import moment from 'moment'
const Footer = ()=>{

  const links = [
    { label: 'Ady Production, LLC ',    link: '/' },
    { label: `Copyright ${ moment().format('YYYY') }  `, link: '/' },
    { label: 'All Rights Reserved', link: '/' },
  ]

  return(
    <div className="container-fluid footer">
      <ul>
        { links.map((e, i)=>(
          <Fragment key={ i }>
            <li>
              <a href={ e.link }>{ e.label }</a>
            </li>
            { i < links.length - 1? <li className="liSeparator">|</li> : null}
          </Fragment>
        )) }
      </ul>
    </div>
  )
}

export default Footer
