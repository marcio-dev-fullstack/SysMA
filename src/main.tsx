import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error: Error | null; }

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null };
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro no SisMA:', error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '60px auto', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#0f172a', fontSize: '20px', fontWeight: 'bold' }}>Erro ao Carregar o SisMA</h2>
          <p style={{ color: '#64748b', fontSize: '14px', margin: '12px 0 20px 0' }}>{this.state.error?.message || 'Falha ao carregar a página.'}</p>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', background: '#059669', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Recarregar Sistema</button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
