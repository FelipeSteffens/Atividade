import './MinutoAtual.css'

const MinutoAtual = () => {
    const minutoAtual = new Date().getMinutes()

    return<>
    <div className='minuto-atual_root'>{minutoAtual}</div>
    </>
};

export default MinutoAtual;