import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../Animatedletters'
import {useState, useEffect} from 'react'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'N', 'h', 'a', 't',' ', 'M', 'i','n', 'h']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect (() =>{
        setTimeout (() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">

                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _15`}>m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                inx={16} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                inx={26} />
                </h1>
                
                <h2>Fronend developer: Javascript / html / css / react</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home