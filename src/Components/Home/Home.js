import React from 'react'
import SubscribeForm from './SubComponents/SubscribeForm'
import Article from './SubComponents/Article'
import VideoClip from './SubComponents/VideoClip'
import Social from './SubComponents/Social'
import ContactForm from './SubComponents/ContactForm'
import Events from './SubComponents/Events'

const Home = ()=>{

  const articles = [
    {
      articleType: 'FEATURED ARTICLE',
      title: '<h1>IF CONTENT IS KING, <br />THEN WHO IS QUEEN?</h1>',
      publishAt: '2 days ago',
      readingTime: '15min read',
      img: '/img/1.jpg',
      url: '/',
      body: "<p>At vero  eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium voluptatum deleniti atque corrupti quos dolores et quas molestiasexcepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati elum dolor…</p>"
    },
    {
      articleType: 'GUEST CONTRIBUTOR',
      title: '<h1>HOW USER EXPERIENCE  <br /> TRANSLATES TO MARKETING</h1>',
      publishautor: 'By Mattia Rasulo |',
      publishAt: '2 days ago',
      readingTime: '15min read',
      
      url: '/',
      body: "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium voluptatum deleniti atque corrupti quos dolores et quas molestiasexcepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati elum dolor…</p>"
    }
  ]

  const article = {
    title: '<h1>WHAT IS PERFORMANCE  <br /> MARKETING?</h1>',
    publishAt: '12 days ago',
    readingTime: '10min read',
    url: '/',
    body: "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium voluptatum deleniti atque corrupti quos dolores et quas molestiasexcepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati elum dolor…</p>"
  }

  const clips = [
    {
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ',
      source: 'YouTube clip',
      time: '3:35',
      url: 'https://www.youtube.com/embed/PsCmUF53Yog'
    },
    {
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ',
      source: 'Vimeo clip',
      time: '4:00',
      url: 'https://www.youtube.com/embed/fInU5iD6318'
    },
    {
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ',
      source: 'YouTube clip',
      time: '8:35',
      url: 'https://www.youtube.com/embed/auqCjF8GQjo'
    },
  ]

  const clip = {
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ',
    source: 'Vimeo clip',
    time: '3:35',
    url: 'https://www.youtube.com/embed/kvxZ-EG700o'
  }

  return(
    <div>
      <div className="main">
        <div className="row" style={{ width: '100%' }}>
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-4 col-md-4 mainLeft text-right">
            <ul>
              <li>CONTENT</li>
              <li>MARKETING</li>
              <li>CREATIVITY</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 mainRight">
            <h3>EVOLVED</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui<br/>
              blanditiis praesentium voluptatum deleniti atque corrupti quos<br/>
              dolores et quas molestias excepturi sint occaecati cupiditate.
            </p>
          </div>
        </div>
      </div>
      <SubscribeForm />
      <div className="" style={{ paddingTop: '80px', paddingBottom: '50px', backgroundColor: '#fff' }}>
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-5 col-md-5">
            { articles.map((e, i)=>(
              <React.Fragment key={ i }>
                <Article
                  { ...e }
                />
                { i < articles.length - 1? <hr className="articleSeparator" />: null }
              </React.Fragment>
            ))}
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-4 col-md-4">
            <h3 className="clipTitle">FRESH CLIP!</h3>
            { clips.map((e, i)=>(
              <React.Fragment key={ i }>
                <VideoClip
                  { ...e }
                />
                { i < clips.length - 1? <hr className="clipSeparator" />: null }
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Social />
      <div className="article-last" style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#FFB900' }}>
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-5 col-md-5">
            <div style={{ marginBottom: '35px' }}>
              <Article
                { ...article }
                white={ true }
              />
            </div>
            <a href="#a" className="link">MORE ARTICLES</a>
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-4 col-md-4">
            <h3 className="clipTitle">Popular</h3>
            <div style={{ marginBottom: '35px' }}>
              <VideoClip
                { ...clip }
                white={ true }
              />
            </div>
            <a href="#a" className="link">MORE VIDEOS</a>
          </div>
        </div>
      </div>
      <div className="" style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#fff' }}>
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-6 col-md-5">
            <ContactForm />
          </div>
          <div className="col-lg-4 col-md-4">
            <Events />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
