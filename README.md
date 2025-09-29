# Portfólio Willy Henrique

Portfólio profissional, responsivo e moderno desenvolvido em React com suporte a múltiplos idiomas (Português e Inglês).

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Múltiplos Idiomas**: Suporte completo para Português (PT-BR) e Inglês (EN)
- **Animações Suaves**: Transições e animações usando Framer Motion
- **Design Moderno**: Interface limpa e profissional com gradientes e efeitos visuais
- **Performance Otimizada**: Construído com Vite para carregamento rápido

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework CSS para estilização
- **Framer Motion**: Biblioteca de animações
- **Lucide React**: Ícones modernos
- **shadcn/ui**: Componentes UI de alta qualidade

## 📁 Estrutura do Projeto

```
willy-portfolio/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes React
│   │   ├── Navigation.jsx # Navegação responsiva
│   │   ├── Hero.jsx       # Seção principal
│   │   ├── About.jsx      # Seção sobre
│   │   ├── Projects.jsx   # Portfólio de projetos
│   │   ├── Skills.jsx     # Habilidades técnicas
│   │   └── Contact.jsx    # Informações de contato
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Ponto de entrada
├── package.json          # Dependências do projeto
└── README.md            # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

3. **Construir para produção:**
   ```bash
   pnpm run build
   # ou
   npm run build
   ```

4. **Visualizar build de produção:**
   ```bash
   pnpm run preview
   # ou
   npm run preview
   ```

## 🌐 Deploy

O projeto está pronto para deploy em plataformas como:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Heroku**

### Deploy na Vercel:
1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `pnpm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

## 📱 Funcionalidades

### Navegação
- Menu responsivo com hamburger para mobile
- Navegação suave entre seções
- Seletor de idioma (PT/EN)

### Seções
1. **Hero**: Apresentação principal com foto de perfil
2. **Sobre**: Informações pessoais e profissionais
3. **Projetos**: Portfólio com projetos reais incluindo:
   - Loja Royale Estofados (https://royaleestofados.vercel.app/)
   - Aplicativo Modbus TCP/IP
   - App Calculadora de Gado
4. **Habilidades**: Tecnologias e ferramentas com barras de progresso
5. **Contato**: Formulário e links para redes sociais

### Contatos Incluídos
- ✉️ Email: henriquewilly03@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/willy-henrique/
- 🐙 GitHub: https://github.com/willy-henrique
- 📱 Instagram: @willy.hvs

## 🎨 Personalização

### Cores e Temas
As cores podem ser personalizadas no arquivo `src/App.css` nas variáveis CSS customizadas.

### Conteúdo
- Textos: Edite os objetos `translations` em cada componente
- Imagens: Substitua os arquivos na pasta `src/assets/`
- Projetos: Modifique o array `projects` em `src/components/Projects.jsx`
- Habilidades: Atualize o objeto `skillsData` em `src/components/Skills.jsx`

## 📄 Licença

Este projeto foi desenvolvido para Willy Henrique. Todos os direitos reservados.

## 🤝 Contato

Para dúvidas ou suporte, entre em contato:
- Email: henriquewilly03@gmail.com
- LinkedIn: https://www.linkedin.com/in/willy-henrique/

---

Desenvolvido com ❤️ por Willy Henrique

