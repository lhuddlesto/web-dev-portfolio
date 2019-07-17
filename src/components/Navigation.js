import React, { useState } from "react"
import MediaQuery from 'react-responsive'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
// SVGS
import { ReactComponent as FreeCodeCampIcon } from '../img/free-code-camp-social.svg'
import { ReactComponent as CodePenIcon } from '../img/codepen-social.svg'
import { ReactComponent as GitHubIcon } from '../img/github-social.svg'
import { ReactComponent as TwitterIcon } from '../img/twitter-social.svg'
// Components
import Home from '../pages/Home'
import Error404 from '../pages/404'

const Navigation = props => {

    const links = {
        freeCodeCamp: 'https://www.freecodecamp.org/nomadfox',
        codepen: 'https://codepen.io/nomadfox/',
        github: 'https://github.com/lhuddlesto/',
        twitter: 'https://twitter.com/1foxtrots',
        instagram: 'https://www.instagram.com/nomadfox1/'
    }

    const [hamburgerMenu, setHamburgerMenu] = useState(false)    

    const handleHamburgerState = () => {
        if (hamburgerMenu === false) {
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden"
            return setHamburgerMenu(true)
            
        }
        setHamburgerMenu(false)
        document.body.style.overflow = "visible"
    }

    if (hamburgerMenu === true) {
        return (
            <Router>
                <div className="mobileMenu">
                    <nav>
                        <img className="mobileMenu__exit" src={require('../img/exit-icon.svg')} alt="Exit ixon" onClick={handleHamburgerState}></img>
                        <ul className="mobileMenu__list">
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" exact to='/'>Home</NavLink></li>
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" exact to='/projects'>Projects</NavLink></li>
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" exact to='/resume'>Resume</NavLink></li>
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" exact to='/contact'>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={Error404}></Route>
                </Switch>

            </Router>

        )
    }


    return (
        <Router>
            <nav className="menu">
                <div className="menu__left">
                <NavLink to="/"><img className="menu__icon" src={require("../img/lance-icon.png")} alt="Lance Huddleston II"></img></NavLink>
                    <p className="menu__title">
                        <span className="menu__title-head">Lance Huddleston II</span>
                        <span className="menu__title-subhead">Software Development</span>
                    </p>
                    <MediaQuery minWidth={1000}>
                        <ul className="menu__list">
                            <li className="menu__list-item menu__list-about"><NavLink activeClassName="menu__link-selected" exact to='/' className="menu__link">Home</NavLink></li>
                            <li className="menu__list-item menu__list-projects"><NavLink activeClassName="menu__link-selected" exact to='/projects' className="menu__link">Projects</NavLink></li>
                            <li className="menu__list-item menu__list-resume"><NavLink activeClassName="menu__link-selected" exact to='/resume' className="menu__link">Resume</NavLink></li>
                            <li className="menu__list-item menu__list-contact"><NavLink activeClassName="menu__link-selected" exact to='/contact' className="menu__link">Contact</NavLink></li>
                        </ul>           
                    </MediaQuery>
                </div>
                <div className="menu__right">
                <MediaQuery minWidth={1000}>
                    <ul className="menu__social">
                        <li className="menu__social-item"><a className="menu__social-link" href={links.freeCodeCamp}><FreeCodeCampIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.codepen}> <CodePenIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.github}><GitHubIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.twitter}><TwitterIcon /></a></li>
                    </ul>
                </MediaQuery>
                    <MediaQuery maxWidth={1000}>
                        <img className="menu__hamburger-icon" src={require("../img/hamburger-icon.svg")} alt="Mobile menu button" onClick={handleHamburgerState}></img>
                    </MediaQuery>
                </div>
            </nav>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={Error404}></Route>
            </Switch>
        </Router>
       
    )
}

export default Navigation;