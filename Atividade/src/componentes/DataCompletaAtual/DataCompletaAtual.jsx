import './DataCompletaAtual.css'

const DataCompletaAtual = () => {
    let ano = new Date().getFullYear();
    let mes = new Date().getMonth() + 1;
    let dia = new Date().getDate();
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let segundo = new Date().getSeconds();
    
    mes = mes.toString().padStart(2, '0');
    dia = dia.toString().padStart(2, '0');
    hora = hora.toString().padStart(2, '0');
    minuto = minuto.toString().padStart(2, '0');
    segundo = segundo.toString().padStart(2, '0');
    
    return <>
    <div className='data-completa_root'>{dia}/{mes}/{ano} -  {hora}:{minuto}:{segundo} </div>
    
    </>



};

export default DataCompletaAtual;