# Variáveis de Ambiente

## Configuração no Vercel

Para que o formulário de contato funcione, você precisa configurar a variável de ambiente no Vercel:

### 1. Acesse o Dashboard do Vercel
1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto do portfólio
3. Vá em "Settings" > "Environment Variables"

### 2. Adicione a variável
- **Name**: `VITE_EMAILJS_PUBLIC_KEY`
- **Value**: Sua Public Key do EmailJS (obtenha em https://www.emailjs.com/account/general)
- **Environment**: Production, Preview, Development (marque todos)

### 3. Redeploy
Após adicionar a variável, faça um novo deploy:
1. Vá em "Deployments"
2. Clique nos três pontos do último deploy
3. Selecione "Redeploy"

## Configuração Local (Desenvolvimento)

Para testar localmente, crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

## Como obter a Public Key

1. Acesse https://www.emailjs.com/
2. Faça login na sua conta
3. Vá em "Account" > "General"
4. Copie sua "Public Key"
5. Cole no Vercel como `VITE_EMAILJS_PUBLIC_KEY`

## Chaves já configuradas no código

- **Service ID**: `service_d2q5q3g`
- **Template ID**: `template_d8fgg8g`
- **Email de destino**: `willydev01@gmail.com`

## Teste

Após configurar a variável no Vercel:
1. Acesse seu portfólio online
2. Vá na seção "Contato"
3. Preencha e envie o formulário
4. Verifique se o email chegou em willydev01@gmail.com
