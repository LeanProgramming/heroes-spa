import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext( AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login!('Lea Muñoz');

    navigate(lastPath,{
      replace: true,
    });
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-success"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
