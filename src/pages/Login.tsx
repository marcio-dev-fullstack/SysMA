<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>SisMA - Login</title>
    <!-- Adicione seus estilos CSS aqui -->
    <style>
        body {
            background-color: #0b132b;
            font-family: Arial, sans-serif;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            background-color: #1c2541;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            width: 100%;
            max-width: 400px;
        }
        .login-container h2 {
            text-align: center;
            margin-bottom: 24px;
            color: #4cc9f0;
        }
        .input-group {
            margin-bottom: 20px;
        }
        .input-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
        }
        .input-group input {
            width: 100%;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #3a506b;
            background-color: #0b132b;
            color: #fff;
            box-sizing: border-box;
        }
        .btn-login {
            width: 100%;
            padding: 12px;
            background-color: #4cc9f0;
            border: none;
            border-radius: 6px;
            color: #0b132b;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .btn-login:hover {
            background-color: #3fa5c4;
        }
    </style>
</head>
<body>

    <div class="login-container">
        <h2>SisMA - Acesso ao Sistema</h2>
        <form id="loginForm" onsubmit="realizarLogin(event)">
            <div class="input-group">
                <label for="email">E-mail do Servidor</label>
                <input type="email" id="email" required placeholder="admin@semma.gov.br">
            </div>
            
            <div class="input-group">
                <label for="senha">Senha</label>
                <input type="password" id="senha" required placeholder="••••••••">
            </div>

            <button type="submit" class="btn-login">Entrar</button>
        </form>
    </div>

    <script>
        function realizarLogin(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            // Lógica de autenticação com Supabase ou backend correspondente
            // O nível de permissão (Admin, Analista ou Fiscal) deve ser consultado
            // na tabela de usuários após o login, direcionando para o dashboard correto.
            console.log("Autenticando usuário:", email);
        }
    </script>

</body>
</html>