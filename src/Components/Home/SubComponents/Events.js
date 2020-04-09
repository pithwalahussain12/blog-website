import React from 'react'
import moment from 'moment'

const Events = ()=>{

  const months = [ 'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December' ]

  const events = [
    {
      date: '2020-04-03',
      description: 'Lorem ipsum vero eos et accusamus et iusto odio stum  deleniti atque corrupti quos dolores',
      url: '/'
    },
    {
      date: '2020-04-05',
      description: 'At vero eos et et iusto odio stum  deleniti atque corrupti quos dolores dolor los amigos',
      url: '/'
    },
    {
      date: '2020-04-13',
      description: 'At vero eos et et iusto odio stum  deleniti atque corrupti quos dolores dolor los amigos',
      url: '/'
    },
    {
      date: '2020-04-28',
      description: 'At vero eos et et iusto odio stum  deleniti atque corrupti quos dolores dolor los amigos',
      url: '/'
    }
  ]

  return(
    <div className="events">
      <h3 className="clipTitle">EVENTS</h3>
      <table className="table" style={{ marginTop:'-15px'}}>
      <tr className="table-calender">
    <td className="black-a">April</td>
    <td className="light">May</td>
    <td className="light">June</td>
    <td className="light">July</td>
    <td> <i className="fas fa-angle-left light"></i> <i className="fas fa-angle-right"></i> </td>
  </tr>
      </table>
      <table className="table"style={{ marginTop:'-23px'}}>
        <tbody>
        

          { events.map((e, i)=>(
            <Item key={ i } { ...e } />
          )) }
        </tbody>
      </table>
    </div>
  )
}

const Item = ({ date, description, url })=>(
 
  <tr>
    <td>{ moment(date).format('DD') }</td>
    <td className="black-table">{ description }</td>
    <td>
      <a className="positon-all" href={ url }>DETAILS</a>
    </td>
  </tr>
)

export default Events
