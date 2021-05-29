import React from 'react'
import {Link} from "react-router-dom";
import {FacebookFilled, YoutubeFilled, GithubFilled, RedditCircleFilled} from '@ant-design/icons'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottom: 'solid 1px #cecece', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <FacebookFilled style={{ fontSize: '1.5rem', margin: '0 5px' }}/>
        <YoutubeFilled style={{ fontSize: '1.5rem', margin: '0 5px' }}/>
        <GithubFilled style={{ fontSize: '1.5rem', margin: '0 5px' }}/>
        <RedditCircleFilled style={{ fontSize: '1.5rem', margin: '0 5px' }}/>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: -12 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'green' }}>
          <img src={logo} alt="logo" width={150}/>
        </Link>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      </div>
    </div>
  )
}

export default Header