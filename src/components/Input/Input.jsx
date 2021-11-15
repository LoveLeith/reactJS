import './Input.css'

const Input = (props) => {
    return (
        <input className = 'input-styles' type = {props.queTipoSoy} placeholder = {props.queDigo} />
    )
}

export default Input

