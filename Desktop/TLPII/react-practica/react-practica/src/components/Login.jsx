import { useState } from "react";
import { useForm } from "../hooks/useForm";
export const Login = () => {
    const { formValues, handleChange, handleReset } = useForm({ username: '', password: '' });
    const { username, password } = formValues;
  return (
    <div className="home">
        <h1>Login</h1>
        <form className="Cont">
            <div className="Contenedor">
                <label for="username">Correo</label>
                <input type="username" name="username" value={username} onChange={handleChange} />
            </div>
            <div className="Contenedor">
                <label for="password">Contraseña</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
            </div>
        </form>
        <button>Iniciar Sesión</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
    </div>
  )
}
