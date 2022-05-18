import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';
import Grid from './UI/Grid';
import Card from './UI/Card';
import './Main.css';

const Main = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = { color: theme.textPrimary };

  const cardBg = { backgroundColor: theme.cardBg };

  const cardBorderGradient = {
    backgroundImage: `linear-gradient(
      to right,
      ${theme.cardBg},
      ${theme.cardBg}
    ),
    linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))`,
  };

  return (
    <div className="main">
      <Grid gridStyle={'grid-translated'}>
        <Card cardType={'card-1'} bg={cardBg} borderTop={'border-facebook'}>
          <div className="card-1-header">
            <img src={facebook} className="icon" alt="facebook" />
            <p className="card-1-header-text">@nathanf</p>
          </div>
          <h1 className="card-1-followers-count" style={textColor}>
            1987
          </h1>
          <p className="card-1-followers">Followers</p>
          <div className="card-1-daily-update">
            <img src={up} className="icon-small" alt={'arrow up'} />
            <p className="card-1-daily-update-text green">12 Today</p>
          </div>
        </Card>
        <Card cardType={'card-1'} bg={cardBg} borderTop={'border-twitter'}>
          <div className="card-1-header">
            <img src={twitter} className="icon" alt="twitter" />
            <p className="card-1-header-text">@nathanf</p>
          </div>
          <h1 className="card-1-followers-count" style={textColor}>
            1044
          </h1>
          <p className="card-1-followers">Followers</p>
          <div className="card-1-daily-update">
            <img src={up} className="icon-small" alt={'arrow up'} />
            <p className="card-1-daily-update-text green">99 Today</p>
          </div>
        </Card>
        <Card
          cardType={'card-1'}
          bg={cardBorderGradient}
          borderTop={'border-instagram'}
        >
          <div className="card-1-header">
            <img src={instagram} className="icon" alt="instagram" />
            <p className="card-1-header-text">@realnathanf</p>
          </div>
          <h1 className="card-1-followers-count" style={textColor}>
            11k
          </h1>
          <p className="card-1-followers">Followers</p>
          <div className="card-1-daily-update">
            <img src={up} className="icon-small" alt={'arrow up'} />
            <p className="card-1-daily-update-text green">1099 Today</p>
          </div>
        </Card>
        <Card cardType={'card-1'} bg={cardBg} borderTop={'border-youtube'}>
          <div className="card-1-header">
            <img src={youtube} className="icon" alt="youtube" />
            <p className="card-1-header-text">Nathan F.</p>
          </div>
          <h1 className="card-1-followers-count" style={textColor}>
            8239
          </h1>
          <p className="card-1-followers">Subscribers</p>
          <div className="card-1-daily-update">
            <img src={down} className="icon-small" alt={'arrow down'} />
            <p className="card-1-daily-update-text red">144 Today</p>
          </div>
        </Card>
      </Grid>
      <h2 style={textColor} className="middle-header">
        Overview - Today
      </h2>
      <Grid>
        <Card cardType={'card-2'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Page Views</p>
            <img src={facebook} alt="facebook" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              87
            </h3>
            <p className="card-2-percentage green">
              <img src={up} alt="arrow up" className="icon-small" />
              3%
            </p>
          </div>
        </Card>
        <Card cardType={'card-2'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Likes</p>
            <img src={facebook} alt="facebook" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              52
            </h3>
            <p className="card-2-percentage red">
              <img src={down} alt="arrow down" className="icon-small" />
              2%
            </p>
          </div>
        </Card>
        <Card cardType={'card-2'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Likes</p>
            <img src={instagram} alt="instagram" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              5462
            </h3>
            <p className="card-2-percentage green">
              <img src={up} alt="arrow up" className="icon-small" />
              2257%
            </p>
          </div>
        </Card>
        <Card cardType={'card-2'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Profile Views</p>
            <img src={instagram} alt="instagram" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              52k
            </h3>
            <p className="card-2-percentage green">
              <img src={up} alt="arrow up" className="icon-small" />
              1375%
            </p>
          </div>
        </Card>
        <Card cardType={'card-2 mt'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Retweets</p>
            <img src={twitter} alt="twitter" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              117
            </h3>
            <div className="card-2-percentage">
              <img src={up} alt="arrow up" className="icon-small" />
              <p className="card-2-percentage-text green">303%</p>
            </div>
          </div>
        </Card>
        <Card cardType={'card-2 mt'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Likes</p>
            <img src={twitter} alt="twitter" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              507
            </h3>
            <div className="card-2-percentage">
              <img src={up} alt="arrow up" className="icon-small" />
              <p className="card-2-percentage-text green">553%</p>
            </div>
          </div>
        </Card>
        <Card cardType={'card-2 mt'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Likes</p>
            <img src={youtube} alt="youtube" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              107
            </h3>
            <div className="card-2-percentage">
              <img src={down} alt="arrow down" className="icon-small" />
              <p className="card-2-percentage-text red">19%</p>
            </div>
          </div>
        </Card>
        <Card cardType={'card-2 mt'} bg={cardBg}>
          <div className="card-2-row">
            <p className="card-2-title">Total Views</p>
            <img src={youtube} alt="youtube" className="icon" />
          </div>
          <div className="card-2-row mt">
            <h3 style={textColor} className="stats">
              1407
            </h3>
            <div className="card-2-percentage">
              <img src={down} alt="arrow down" className="icon-small" />
              <p className="card-2-percentage-text red">12%</p>
            </div>
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default Main;
