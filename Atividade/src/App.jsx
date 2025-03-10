import './App.css';
import AnoAtual from './componentes/AnoAtual/AnoAtual';
import DataCompletaAtual from './componentes/DataCompletaAtual/DataCompletaAtual';
import DiaAtual from './componentes/DiaAtual/DiaAtual';
import HoraAtual from './componentes/HoraAtual/HoraAtual';
import MesAtual from './componentes/MesAtual/MesAtual';
import MinutoAtual from './componentes/MinutoAtual/MinutoAtual';
import OlaMundo from './componentes/OlaMundo/OlaMundo';
import OlaPessoa from './componentes/OlaPessoa/OlaPessoa';

function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>

      <OlaMundo />
      <hr />

      <span>
        2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>

      <DiaAtual />
      <hr />

      <span>
        3. Crie um componente chamado 'MesAtual' que mostra o texto:
        "03" em uma  com o fundo verde, texto justificado à esquerda na cor branco.
      </span>

      <MesAtual />
      <hr />

      <span>
        4. Crie um componente chamado 'AnoAtual' que mostra o texto:
        "2024" em uma com o fundo vermelho, justificado à direita na cor amarelo.  
      </span>

      <AnoAtual />
      <hr />

      <span>
      5. Crie um componente chamado 'HoraAtual' que mostra o texto:
      "20" em uma div redonda 50x50 px centralizada com o fundo azul, texto na cor
      amarelo.
      </span>

      <HoraAtual />
      <hr />

      <span>
      6. Crie um componente chamado 'MinutoAtual' que mostra o texto:
      "30" em uma div redonda 50x50 px centralizada com o fundo rosa, texto na cor
      preta
      </span>

      <MinutoAtual />
      <hr />

      <span>
      7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
      "15/03/2024 20:30" em uma div com o fundo marrom, texto centralizado na cor
      branca.
      </span>
      <DataCompletaAtual />
      <hr />
    
      <span>
      8. Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
      e mostra o texto:
      "Olá, nome!" em uma div com o fundo laranja, texto centralizado na cor branca.
      </span>
      <OlaPessoa nome='Felipe'></OlaPessoa>
      <hr />

      <span>
      Crie um componente chamado 'ListaProdutos' que aceita uma prop chamada
      'produtos' e deve ser uma lista de nomes de produtos.
      O componente deve listar os itens em tela em uma ul com o fundo roxo e a letra
      amarela.
      </span>

      <hr />



    </>
  );
}

export default App;
