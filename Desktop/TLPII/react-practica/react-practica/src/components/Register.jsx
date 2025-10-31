import "./Register.css"
export const Register = () => {
  return (
    <div className="home">
        <h1>Registro</h1>
        <form className="Cont">
            <div className="Contenedor">
                <label htmlFor="lastname">Lastname</label>
                <input type="lastname" />
            </div>
            <div className="Contenedor">
                <label htmlFor="firstname">Firstname</label>
                <input type="firstname" />
            </div>
            <div className="Contenedor">
                <label htmlFor="username">Username</label>
                <input type="username" />
            </div>
            <div className="Contenedor">
                <label htmlFor="email">Correo</label>
                <input type="email" />
            </div>
            <div className="Contenedor">
                <label htmlFor="password">Contraseña</label>
                <input type="password" />
            </div>
        </form>
        <button>Submit</button>
    </div>
  )
}
