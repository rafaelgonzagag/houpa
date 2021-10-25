import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { ContainerLogin } from "./styles"
//import * as Yup from 'yup';
//import { FormHandles } from '@unform/core';
//import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';




export function Login () {
  //const formRef = useRef<FormHandles>(null);
  const [email, setEmail] = useState('vitrine@houpa.com');
  const [password, setPassword] = useState('password');

  const history = useHistory();

  //const { signIn } = useAuth();

  async function handleLogin (event: FormEvent) {
    event.preventDefault();
    
    try {
  
      const response = await api.post('/login', {
        email,
        password,
      });
  
      const { token, user } = response.data;
      
      localStorage.setItem('@Houpa:token', token);
      localStorage.setItem('@Houpa:user', JSON.stringify(user));
  
      api.defaults.headers.authorization = `Bearer ${token}`;

      history.push('/gerenciar-vitrines');
    } catch (err) {
      console.log('erro', err);
    }

  }

  return (
      <ContainerLogin>
        
        <form onSubmit={handleLogin}>
            <legend>E-mail</legend>
            <input 
              type="text" 
              name='email' 
              value={email} 
              onChange={event => setEmail(event.target.value)}
            />
            <legend>senha</legend>
            <input 
              type="password" 
              name='password' 
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          <button type="submit" className='btn'>Entrar</button>
        </form>
      </ContainerLogin>
       

  )
}
  
