# Troubleshooting EmailJS - Erro 400

## Problema: Erro 400 da API do EmailJS

O erro 400 geralmente indica problemas com o template ou parâmetros. Vamos resolver passo a passo:

## 1. Verificar o Template no EmailJS

### Acesse seu template:
1. Vá em https://www.emailjs.com/
2. Faça login
3. Vá em **"Email Templates"**
4. Clique no template `template_d8fgg8g`

### Verificar as variáveis do template:
O template deve usar exatamente estas variáveis:

```
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
{{to_email}}
{{reply_to}}
```

### Template recomendado:

**Subject:**
```
Nova mensagem do portfólio: {{subject}}
```

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

## 2. Verificar o Service

### Acesse seu service:
1. Vá em **"Email Services"**
2. Clique no service `service_d2q5q3g`
3. Verifique se está **"Connected"**
4. Se não estiver, reconecte sua conta Gmail

## 3. Testar com template simples

Se ainda não funcionar, crie um template de teste:

**Subject:**
```
Teste
```

**Content:**
```
Nome: {{from_name}}
Email: {{from_email}}
Mensagem: {{message}}
```

## 4. Verificar no console

Após as alterações, teste novamente e verifique no console:
- `"Enviando email com parâmetros:"` - mostra os dados enviados
- `"Error details:"` - mostra detalhes do erro

## 5. Possíveis causas do erro 400:

1. **Template não encontrado** - Verifique se o Template ID está correto
2. **Service não conectado** - Reconecte o Gmail no EmailJS
3. **Variáveis incorretas** - Use exatamente os nomes das variáveis
4. **Template vazio** - Adicione conteúdo ao template
5. **Parâmetros inválidos** - Verifique se todos os campos obrigatórios estão preenchidos

## 6. Teste passo a passo:

1. **Salve o template** no EmailJS
2. **Teste o formulário** no portfólio
3. **Verifique o console** para ver os parâmetros enviados
4. **Compare** com as variáveis do template

## 7. Se ainda não funcionar:

1. Crie um **novo template** com nome diferente
2. Use **variáveis simples**: `{{name}}`, `{{email}}`, `{{message}}`
3. Atualize o **Template ID** no código
4. Teste novamente

## 8. Contato com suporte:

Se nada funcionar, entre em contato com o suporte do EmailJS:
- https://www.emailjs.com/support/
- Inclua os logs do console
- Inclua o Template ID e Service ID
