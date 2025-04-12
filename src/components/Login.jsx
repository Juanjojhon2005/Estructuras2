import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail, loginWithGoogle, logout, registerWithEmail } from "../redux/authSlice";

export function Login() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    dispatch(loginWithEmail({ email, password }));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login con Firebase</h2>
      {user ? (
        <div>
          <p>Bienvenido, {user.email}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => dispatch(registerWithEmail({ email, password }))} disabled={loading}>
          Registrarse
          </button>
          <button onClick={handleEmailLogin} disabled={loading}>
            Iniciar sesión
          </button>
         
          <button onClick={handleGoogleLogin}>Iniciar con Google</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}