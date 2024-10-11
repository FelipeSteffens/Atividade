import './HoraAtual.css'

const HoraAtual = () => {
    const horaAtual = new Date().getHours()

    return <>
    <div className='hora-atual_root'>{horaAtual}</div>
    </>


};

export default HoraAtual;