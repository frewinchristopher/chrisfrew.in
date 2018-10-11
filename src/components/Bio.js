import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../images/defaultprofilepicture.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Chris Frewin`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(5),
            height: rhythm(5),
            borderRadius: '100%',
            zIndex:999
          }}
        />
        <p>
          Hi, I'm <strong>Chris Frewin</strong>, I run and post on
          {' '}
          <a href="https://nlp-champs.com" target="_blank">
            nlp-champs.com
          </a>
          {' '}
          and own the <a href="https://medium.com/@sirenapparel/siren-apparel-all-about-us-43c99839de5d" target="_blank">charity clothing company</a>
          {' '}
          <a href="https://sirenapparel.us" target="_blank">
            Siren Apparel
          </a>
          .
          {'\n'}
          I'm an ex-mechanical engineer gone software engineer that (mostly) lives in Austria. 
          <br/>
          <br/>  
          I'm a remote, full-stack application software engineer, and a hobbyist machine learning/natural language processing developer. If I'm not building software, I'll be found hiking, skiing, losing money trading options, or creating music and art.{' '}
          <a href="https://twitter.com/galt_">
            You can follow me on Twitter, @Galt_,
          </a>
          {' '}
          (though I don't post often), or,
          {' '}
          <a href="mailto:frewin.christopher@gmail.com">
            Send me an email.
          </a>
          <br/>
          <br/>
          {' '}
          Got a project/job that needs doin'? <a href="https://chrisfrew.in/talk-shop" style={{color:'black',textDecorationColor:'black'}}><span style={{color:'black'}}>Get in contact with me</span></a> and let's get to it! I'm always looking to learn and build new things!
          <br/>
          <br/>
          I'm a proud member of Dev.to, Product Hunt's Makers Community, and Egghead.io's Community!
          <br/>
          <a target="_blank" href="https://dev.to/frewinchristopher" style={{textDecoration:'none'}}>
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="fullStackChris's DEV Profile" height="30" width="30" />
          </a>
          &nbsp;
          <a target="_blank" href="https://producthunt.com/@galt_" style={{textDecoration:'none'}}>
            <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path>
                    <path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path>
                </g>
            </svg>
          </a>
          &nbsp;
          <a target="_blank" href="https://community.egghead.io/members/1420280">
            <img src="https://egghead.io/favicon.ico?v=2" width="30"/>
          </a>
        </p>
        
      </div>
    )
  }
}

export default Bio
