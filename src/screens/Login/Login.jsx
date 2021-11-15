import Input from "../../components/Input/Input"

const Login = () => {
    return(
        <section className = "login-wrapper">
            <form className = "inputs-container">
                <h1>Customer Login</h1>
                <Input queTipoSoy = 'text' queDigo = 'Soy el email'/>
                <Input queTipoSoy = 'password' queDigo = 'Soy el password'/>
                <button type = "submit"></button>
            </form>
        </section>
    )
}

export default Login;