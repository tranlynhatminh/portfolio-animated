import AnimatedLetters from '../Animatedletters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() =>{
        setTimeout (() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])


    return (
        <>
            <div className="container about-page">
                <div className='wrapper'>
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters 
                            letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm' , 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            I'm intern front-end, now i looking for a internship job to i can actual working.
                        </p>
                        <p>
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one problem at a time.
                        </p>
                        <p>
                            About interests: i'm a sport fanatic, i really like soccer
                        </p>
                    </div>

                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon className="icon-cube" icon={faAngular} color="#DD0031" />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon className="icon-cube" icon={faHtml5} color="#F06529" />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon className="icon-cube" icon={faCss3} color="#28A4D9" />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon className="icon-cube" icon={faReact} color="#5ED4F4" />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon className="icon-cube" icon={faJsSquare} color="#EFD81D" />
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon className="icon-cube" icon={faGitAlt} color="#EC4D28" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About