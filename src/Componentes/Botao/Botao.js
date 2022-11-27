import './Botao.css'

const Botao = (props) => {

    return(
        <button className='Botao' type='submit'> 
           {props.children}
        </button>
    )
}
export default Botao