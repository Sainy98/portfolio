import React, { useState, useEffect } from 'react';
import Certificate from './certificateDiv';

export default function Edu() {
    const [showCertificate, setShowCertificate] = useState(false)
    const [btnName, setBtnName] = useState("Click Here");
    const [certificateData, setCertificateData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [visibleCount, setVisibleCount] = useState(4); // Show 4 certificates initially
    const [showMoreDiv, setShowMoreDiv] = useState(false);

     // Fetch certificate data from API
     useEffect(() => {
        setLoading(true)
        fetch(
            'https://script.google.com/macros/s/AKfycbypAtLughqo4sIREPfkWhN50B1hWC30XG6EMV1MVxYBWTY6fId08Qrlr54KfMKMX_GW/exec?sheet=Certificate'
        )
            .then((res) => res.json())
            .then((data) => {
                setCertificateData(data); // Update state with fetched data
                setLoading(false)
            })
            .catch((error) => console.error('Error Fetching data:', error));
            setLoading(false)
    }, []);

   

    const handleClick = () => {
        if (!showCertificate) {
            setShowCertificate(true);
            setBtnName('Certificates')
            setShowMoreDiv(true);
        }
    }

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Show 5 more certificates
    };


    return (
        <div className='eduDiv' id='Edu'>

            <button className='btn'> Educations Details</button>
            <div className="EduContent" >
                <img src={process.env.PUBLIC_URL + "/college.png"} alt='certificate'></img>
                <p>Bachelor In Computer Application
                    From Manipal University, Jaipur </p>
            </div>

            <div className="certificate">
                <img src={process.env.PUBLIC_URL + "/certificate.png"} alt='logo'></img>
                <button onClick={handleClick}>{btnName}</button>
            </div>

            {showCertificate && (
                <div className="certificateContainer">
                    {loading ? (
                        <p>Loading Certificate...</p>
                    ) : (
                        <>
                            {certificateData.slice(0, visibleCount).map((item, index) => (
                                <Certificate
                                    key={index}
                                    img={item['Certificate Img']}
                                    h3={item.Title}
                                    link={item['Certificate Link']}
                                />
                            ))}
                           
                        </>
                    )}
                    
                </div>
            )}
            { showMoreDiv &&
        <div className='showMoreDiv'>
            {visibleCount < certificateData.length && (
                <button onClick={handleShowMore} className='showMoreBtn' >Show More</button>
            )}
            </div>
}
        </div>

    )
}