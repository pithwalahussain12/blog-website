import React from 'react'

const VideoClip = ({ description, source, time, url, white })=>{

  return(
    <div className="videoclip">
      <p>{ description }</p>
      <p className={ white? 'text-white': '' }> { source } | { time } </p>
      {/* <img src={ img } alt={ source } /> */}
          <iframe width="100%" height="230"  src={ url }  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )
}

export default VideoClip
