import React from 'react'
import hero1 from '../assets/hero1.png'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { notificationToast } from '../notification_toast/notificationToast';
import axios from 'axios';
import { loadImage } from '../utils/utils';
import { getNotis } from '../utils/notifications/getNotifications';
import { sendNotis } from '../utils/notifications/sendNotifications';

const LandingPage = () => {
  
  const { user, loginWithRedirect } = useAuth0();
  const sub = user?.sub;
  console.log(sub);
  
  sendNotis(getNotis, sub);


  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Bid, win, own—just one click away!</h2>
        <div>
            <div className="hero-hand-icon">
                <p>
                    New
                </p>
            </div>
            <p>Items</p>
            <p>for Everyone</p>
        </div>
        
        <div className="hero-latest-btn"> 
          {sub ? (
              <Link to='/auctions'>
                <div >
                  View Auctions
                </div>
              </Link>
              
            ) :
            (
              <div>
                <button onClick={() => loginWithRedirect()}>Start bidding!</button>
              </div>
            )
          }
            
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero1} alt="" />
    </div>
  )
}

export default LandingPage