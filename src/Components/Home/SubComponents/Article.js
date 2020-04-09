import React from 'react'
import parse from 'html-react-parser'

const Article = ({ articleType, title, publishautor, publishAt, readingTime, body, img, url, white })=>{

  return(
    <div className="article">
      { articleType? <h6>{ articleType }</h6>: null }
      <img src="/img/path.png" className="img-line"/>
     
      <div className="articletitle">{ parse(title) }</div>
      <p className={ white? 'text-white': '' }> {publishautor}  { publishAt } | { readingTime } </p>
      { img? <img src={ img } alt={ title } />: null }
      <div className="articleBody">{ parse(body) }</div>
      <a className={ white? 'text-white': '' } href={ url }>Continue reading >></a>
    </div>
  )
}

export default Article
