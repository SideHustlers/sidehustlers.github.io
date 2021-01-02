import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import UncontrolledLottie from '../components/UncontrolledLottie';
import { AiOutlineGithub } from 'react-icons/ai';

import agLogo from '../assets/images/ag_logo.png';
import pgLogo from '../assets/images/pg_logo.png';

const Splash = props => {
  const redirectNewTab = (url) => {
    window.open(url, '_blank');
  }

  const redirectMailTo = () => {
    window.open("mailto:hello@sidehustlers.io"+'?&subject=Project idea');
  }

  return (
    <div className={css(styles.mainContainer)}>
      <div className={css(styles.textContainer)}>
        <div className={css(styles.titleContainer)}>
          SideHustlers.io
        </div>
        <div className={css(styles.headingContainer)}  style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          AN OPEN SOURCE COLLABORATIVE
        </div>
        <div className={css(styles.subHeadingContainer)}>
          We're a team of bored developers creating fun projects and making them open sourced.
        </div>
        <div className={css(styles.iconContainer)}>
          <div className={css(styles.icon)} onClick={() => redirectNewTab("https://github.com/SideHustlers")}>
            <AiOutlineGithub style={{color: 'white', padding: 5}} size={40}/>
          </div>
          <div className={css(styles.icon)} onClick={() => redirectNewTab("https://ajgalloway.github.io/portfolio/#/")}>
            <img src={agLogo} className={css(styles.iconImg)} />
          </div>
          <div className={css(styles.icon)} style={{padding: 2}} onClick={() => redirectNewTab("https://www.pramodgobburi.com")}>
            <img src={pgLogo} className={css(styles.iconImg)} />
          </div>
        </div>
      </div>
      <div className={css(styles.lottieContainer)}>
        <UncontrolledLottie animationData="splash" width={500} height={500} autoplay={true} loop={true} />
      </div>
      <div className={css(styles.footer)}>
        <div style={{color: '#557499'}}>
          Have an idea for a project?
        </div>
        <div className={css(styles.linkContainer)} onClick={() => redirectMailTo()}
        style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          Email us at hello@sidehustlers.io
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to left, #041B3C, #0D264C)',
    paddingBottom: 50
  },
  textContainer: {
    fontFamily: 'Raleway',
    zIndex: 100,
  },
  titleContainer: {
    fontWeight: 'lighter',
    fontSize: 25,
    color: '#557499'
  },
  headingContainer: {
    fontWeight: 'normal',
    fontSize: 50,
    maxWidth: 600,
    lineHeight: 1.2,
    marginTop: 20,
    backgroundImage: 'linear-gradient(to right, #ED497C, #A938D2)',
    color: 'transparent',
    backgroundClip: 'text',
  },
  subHeadingContainer: {
    fontWeight: 'lighter',
    fontSize: 20,
    maxWidth: 600,
    lineHeight: 1.5,
    marginTop: 20,
    color: '#557499',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 600,
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    background: 'transparent',
    marginRight: 10,
    cursor: 'pointer',
    ":hover": {
      background: 'linear-gradient(to right, #ED497C, #A938D2)',
    }
  },
  iconImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  lottieContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    position: 'fixed',
    bottom: 20,
    right: 40,
  },
  linkContainer: {
    backgroundImage: 'linear-gradient(to right, #ED497C, #A938D2)',
    color: 'transparent',
    backgroundClip: 'text',
    cursor: 'pointer',
  }
});

export default Splash;