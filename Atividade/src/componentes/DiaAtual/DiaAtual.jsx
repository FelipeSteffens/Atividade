import './DiaAtual.css'

const DiaAtual = () => {
    const diaAtual = new Date ().getDate();
    return <>
    <div className="dia_atual_root">{diaAtual}</div>
    </>
}

export default DiaAtual;