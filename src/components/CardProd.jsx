import notFoundImg from '../assets/Image-not-found.png'
import './CardProd.css'

export default function CardProd({ p, handdleClick }) {
    return (
        <section className='container-cardProd'>
            <h3 className='title-card-prod'>{p.title}</h3>
            <img src={notFoundImg} alt="" />
            <div className='info-cardProd'>
                <label htmlFor="">US$ {p.price}</label>
                <button onClick={() => handdleClick(p)}>Agregar</button>
            </div>
        </section>
    )
}