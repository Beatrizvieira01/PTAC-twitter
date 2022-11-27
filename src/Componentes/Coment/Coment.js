import {useState} from 'react'
// import './Coment.css'
import CampoText from '../CampoText/CampoText'
import Botao from '../Botao/Botao'

const Coment = (props) => {
    
    
    const Salvar = (evento) => {
      evento.preventDefault()
      props.registrarAluno({
      
      })
    }
    
    return(
        <section className='Coment'>
         <form onSubmit={Salvar}>
            <CampoText obrigatorio={true} />

            <Botao>Salvar Tweet</Botao>
         </form>
         </section>
    )
}
export default Coment