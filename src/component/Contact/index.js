import Loader from 'react-loaders'
import AnimatedLetters from '../Animatedletters'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() =>{
        setTimeout (() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        inx={15}
                        />
                    </h1>
                    <p>
                        I am interested internship jobs, dynamic workplace. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="send" className="flat-button"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Nhật Minh,
                    <br />
                    Việt Nam,
                    <br />
                    Ấp 3, Xã Thừa Đức, Huyện Cẩm Mỹ, <br />
                    Đồng Nai <br />
                    <br />
                </div>
                <div className="map-wrap">
                    <MapContainer center={[10.786627, 107.147761]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[10.786627, 107.147761]}>
                            <Popup>i'm here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact