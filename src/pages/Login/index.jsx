import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pages from '../../utils/pages';

const Login = ({ submitData }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (!id || !pw) return;

    try {
      if (submitData) {
        const result = await submitData({ id, pw });
        if (result === false) return;
      }
      navigate(pages.get('myPage').path);
    } catch (error) {
      // If submitData throws, treat as unsuccessful and do not navigate
    }
  };

  return (
    <section className='container login'>
      <form onSubmit={handleLoginFormSubmit}>
        <p className='id-container'>
          <label htmlFor='id'>Account ID:</label>
          <input
            type='text'
            name='id'
            required
            value={id}
            id='id'
            onChange={handleIdChange}
          />
        </p>
        <p className='pw-container'>
          <label htmlFor='pw'>Password:</label>
          <input
            type='password'
            value={pw}
            id='pw'
            required
            onChange={handlePwChange}
          />
        </p>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default Login;
