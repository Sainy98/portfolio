import React from "react"
import Atropos from 'atropos/react';

export default function hobby() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("Form submitted successfully! 😊");
                form.reset(); // Reset the form after successful submission
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert("Form submission failed. 🥺 Please try again.");
            console.error('Error:', error);
        }
    };

    return (

        <div className="hobbyContainer" id="Hobby">
            <button className='btn'>Hobbies</button>
            <div className="hobbyBox">
                <Atropos className="my-atropos">
                    <div className="HobbyDiv">
                        <img src="https://img.freepik.com/free-photo/expert-carpenter-creates-art-using-old-wood-generated-by-ai_188544-27902.jpg?t=st=1711766489~exp=1711770089~hmac=b892c5d7d1f686792896db96922cd2dd5c9ba5097486fc82d4d99730e765f33e&w=1060" alt="Hobby Image1" data-atropos-offset="10" />
                        <h3>Drawing</h3>
                    </div>

                </Atropos>

                <Atropos className="my-atropos" >

                    <div className="HobbyDiv">
                        <img src={`${process.env.PUBLIC_URL}/music.jpg`} alt="Music" data-atropos-offset="10" />
                        <h3>Music</h3>
                    </div>

                </Atropos>

                <Atropos className="my-atropos" >

                    <div className="HobbyDiv">
                        <img src={`${process.env.PUBLIC_URL}/coding.jpg`} alt="coding" data-atropos-offset="10" />
                        <h3>Coding</h3>
                    </div>

                </Atropos>

            </div>



            <button className='btn'> Contact Details</button>
            <div className="Contact" id="Contact">
                <a href="https://wa.me/917388241419?text=I%20seen%20your%20portfolio" > <div className="ContactDiv"> <img src={process.env.PUBLIC_URL + "/whatsapp.png"} /> </div></a>
                <a href="https://linkedin.com/in/harsh-pratap-singh-255568218"> <div className="ContactDiv"> <img src={process.env.PUBLIC_URL + "/linkdin.png"} /> </div> </a>
                <a href="mailto:sainythakur@gmail.com"> <div className="ContactDiv"> <img src={process.env.PUBLIC_URL + "/email.png"} /> </div> </a>

            </div>

            <form className="ContactForm"
                action="https://script.google.com/macros/s/AKfycbyrRuphLdYz_n8WzgeJq2MXlAAAp6PLjIMTu7g6jSmZrVG6QIBX5k3JmJrxGwriy4h_6A/exec"
                method="POST"
                onSubmit={handleSubmit}
            >


                <input type="email" id="fname" name="email" className="email" placeholder="Enter your Gmail" required /><br />
                <textarea placeholder="Write your message" name="message" required />
                <input type="submit" className="subBtn" />
            </form>


        </div>

    )
}