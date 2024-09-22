import React, { useState, useEffect } from "react"

export default function About() {
    const [hasStartedTypewriter, setHasStartedTypewriter] = useState(false);
    const [buttonText, setButtonText] = useState('Click Me');
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [animationClass, setAnimationClass] = useState('AboutBtn');
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    useEffect(() => {
        const textArray = [`Hello Dear, I am Harsh 🧑‍💻 <br> <br/>
        
        I'm a Visionary Personality with a love for innovation. Technology has the power to turn ideas into reality, and I'm dedicated to pushing its boundaries. <br> <br/>
        My journey in web development started with curiosity. I've since mastered coding languages and frameworks, always seeking new challenges. Creativity drives me. 
        <br> <br/>Whether designing or coding, I approach each project with purpose and excitement. Beyond coding, I explore futuristic tech, envisioning a brighter future through curiosity and change.
        <br> <br/> Join me in innovating and building extraordinary things together! 😊`
        ];

        if (hasStartedTypewriter && index < textArray.length) {
            const interval = setInterval(() => {
                const text = textArray[index];
                const displayedText = text.substring(0, displayText.length + 1);
                setDisplayText(displayedText);

                if (displayedText === text) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIndex(index + 1);
                    }, 100000); // Delay before displaying the next text
                }
            }, 10); // Typing speed
            return () => clearInterval(interval);
        }


    }, [hasStartedTypewriter, index, displayText]);


    const hanldleClick = () => {
        if (!hasStartedTypewriter) {
            setHasStartedTypewriter(true);
            setButtonText('About Me');
            document.getElementById('TypeWriter').style.visibility = 'visible';
            setAnimationClass('');
        }
    }

    return (
        <>

            <div className='about' id="About">

                <div>
                    <img src={process.env.PUBLIC_URL + '/my_pic.png'} className='profile' height="550px;"></img>
                </div>
                <div className="text">
                    <h1 className='name'> Harsh Pratap Singh</h1>
                    <h2 className="title">🧑‍💻Web developer </h2>

                    <p className='welcome_text'>
                        Welcome to my digital world where coding is the paint and pixels are the canvas! Prepare to be dazzled by a symphony of creativity and innovation.

                        Let's turn your web dreams into reality!
                    </p>
                </div>
            </div>

            <button className={`btn ${animationClass}`} onClick={hanldleClick}>{buttonText}</button>

            <div className="abt_div" id="TypeWriter" style={{ visibility: 'hidden' }} >
                <p dangerouslySetInnerHTML={{ __html: displayText }}></p>
            </div>



        </>
    )
}