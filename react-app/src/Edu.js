import React from 'react';
import Certificate from './certificateDiv';
import Data from './CertificateData';
import { useState } from 'react';
export default function Edu() {
    const [ShowCertificate, setShowCertificate] = useState(false)
    const [btnName, setBtnName] = useState("Click Here")

    const handleClick = () => {
        if (!ShowCertificate) {
            setShowCertificate(true);
            setBtnName('Certificates')
        }
    }

    return (
        <div className='eduDiv' id='Edu'>

            <button className='btn'> Educations Details</button>
            <div className="EduContent" >
                <img src={process.env.PUBLIC_URL + "/college.png"} alt='certificate'></img>
                <p>Bachelor In Computer Application
                    From Manipal University, Jaipur </p>
            </div>

            <div className="certificate">
                <img src={process.env.PUBLIC_URL + "/certificate.png"}></img>
                <button onClick={handleClick}>{btnName}</button>
            </div>

            {(ShowCertificate &&

                <div className="certificateContainer">
                    {Data.map((item, index) => (
                        <Certificate
                            key={index}
                            img={item.img}
                            h3={item.h3}
                            link={item.link}
                        />
                    ))}
                </div >

            )}
        </div>

    )
}