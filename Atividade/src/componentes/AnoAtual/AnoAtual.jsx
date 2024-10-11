import './AnoAtual.css'

const AnoAtual = () => {
    const anoAtual = new Date().getFullYear()
    return<>
    <div className='ano-atual_root'>{anoAtual}</div>
    </>
};

export default AnoAtual;