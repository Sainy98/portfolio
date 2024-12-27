import Atropos from 'atropos/react';

export default function Certificate(props) {
    const { img, h3, link } = props;


    return (
       
        <Atropos className="my-atropos">
            <div className="certificate_div" data-atropos-offset="4"> 
                <img src={img} alt={h3} loading="lazy" />
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h3>{h3}</h3>
                </a>
            </div>
        </Atropos>
     

    );
}
