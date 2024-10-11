import { s } from "vite/dist/node/types.d-FdqQ54oU"

const ListaProdutos = () => {
    const produtos = ['Celular Samsung', 'Notebook Acer', 'Smart TV LG', 'Impressora HP', 'Tablet Multilaser', 'Monitor Dell']

    return <>
       { produtos.map((produtos,index) => {
        return <div key={index} className="lista-produtos_root"></div>

       }

       )

        }
    </>

}   