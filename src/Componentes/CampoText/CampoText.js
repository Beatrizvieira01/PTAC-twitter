import './CampoText.css'

const CampoTexto = (props) => {
    
    const Digitar = (evento) =>{
     props.alterar(evento.target.value)

    }
    return(
        <div className="CampoTexto">
            <label>
                {props.label}
            </label>
            <input type={Text} value={props.valor} onChange={Digitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto