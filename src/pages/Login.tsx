import React, { useState } from 'react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('A autenticar utilizador:', email, senha);
    // Aqui entra a chamada de autenticação do Supabase
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>SisMA</h1>
          <p style={styles.subtitle}>Sistema Municipal de Meio Ambiente</p>
        </div>

        <form onSubmit={realizarLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">E-mail do Servidor</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@semma.gov.br"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#0b132b',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#1c2541',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #3a506b',
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    color: '#4cc9f0',
    margin: '0 0 8px 0',
  },
  subtitle: {
    color: '#8d99ae',
    fontSize: '14px',
    margin: 0,
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #3a506b',
    backgroundColor: '#0b132b',
    color: '#ffffff',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4cc9f0',
    border: 'none',
    borderRadius: '6px',
    color: '#0b132b',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};