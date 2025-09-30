# Configuração do EmailJS

Para conectar o formulário de contato ao seu email, você precisa configurar o EmailJS:

## 1. Criar conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Verifique seu email

## 2. Configurar o serviço de email
1. No dashboard, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" (ou outro provedor)
4. Conecte sua conta Gmail (willydev01@gmail.com)
5. Anote o **Service ID** (ex: service_xxxxxxx)

## 3. Criar template de email
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

**Subject:** Nova mensagem do portfólio: {{subject}}

**Content:**
```
Você recebeu uma nova mensagem do seu portfólio:

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio.
```

4. Salve o template e anote o **Template ID** (ex: template_xxxxxxx)

## 4. Obter chave pública
1. Vá em "Account" > "General"
2. Copie sua **Public Key** (ex: xxxxxxxxxxxxxxxxxxxx)

## 5. Atualizar o código
No arquivo `src/components/Contact.jsx`, substitua:

```javascript
const EMAILJS_SERVICE_ID = 'service_portfolio'; // Substitua pelo seu Service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // Substitua pelo seu Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Substitua pela sua Public Key
```

## 6. Testar
1. Salve as alterações
2. Execute o projeto: `pnpm dev`
3. Teste o formulário de contato
4. Verifique se o email chegou em willydev01@gmail.com

## Limites da conta gratuita
- 200 emails por mês
- Perfeito para portfólio pessoal

## Segurança
- A chave pública é segura para usar no frontend
- O EmailJS cuida da autenticação com Gmail
- Não é necessário expor credenciais sensíveis
