import React from 'react'
import './Footer.scss'
import {Link, Redirect} from 'react-router-dom'


export const Footer = () => {
    return (
      <>
        <a className="footer-link" href="https://github.com/Movie-view/Moview">
          <div className="footer">KTS School Project</div>
        </a>
      </>
    );
}
