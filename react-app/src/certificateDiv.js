import Atropos from 'atropos/react';
export default function certificate(props) {
    const { img, h3, link } = props;

    return (
        <Atropos className="my-atropos" >

            <div className="certificate_div" data-atropos-offset="4">
                <img src={img} alt='certificate1'></img>
                <a href={link}> <h3>{h3}</h3></a>
            </div>


        </Atropos>
    )
}