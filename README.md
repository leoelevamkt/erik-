# Erika Pires Reis - Psicóloga Clínica

Site profissional da psicóloga clínica Erika Pires Reis, especializada em atendimento a adolescentes, jovens adultos e vestibulandos.

## 🚀 Deploy no Netlify

Este projeto está configurado para deploy automático no Netlify. Siga os passos abaixo:

### 1. Conectar Repositório
- Faça push do código para um repositório Git (GitHub, GitLab, etc.)
- Acesse [Netlify](https://netlify.com) e faça login
- Clique em "New site from Git"
- Conecte seu repositório

### 2. Configurações de Build
As configurações já estão prontas no arquivo `netlify.toml`:
- **Build command**: `npm ci && npm run build:netlify`
- **Publish directory**: `dist`
- **Node version**: 18

### 3. Configurações Automáticas
O projeto inclui os seguintes arquivos de configuração:
- `netlify.toml` - Configurações de build e deploy
- `.nvmrc` e `.node-version` - Especifica Node.js 18
- `public/_redirects` - Configuração para SPA routing
- `vite.config.netlify.ts` - Configuração específica do Vite para Netlify

### 4. Deploy Manual (alternativa)
Se preferir fazer deploy manual:
1. Execute `npm run build` localmente
2. Faça upload da pasta `dist` diretamente no Netlify

## 🛠️ Tecnologias Utilizadas

- **React 19** - Interface de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool
- **Lucide React** - Ícones

## 📱 Funcionalidades

- Design responsivo e moderno
- Animações suaves e efeitos visuais
- Integração com WhatsApp
- Link para Instagram
- Seções: Sobre, Serviços, Processo, Depoimentos, FAQ, Contato
- SEO otimizado

## 🎨 Características do Design

- Paleta de cores: coral pink (#DE9287) como cor principal
- Tipografia: Poppins (Google Fonts)
- Efeitos de vidro (glassmorphism)
- Gradientes e sombras suaves
- Micro-interações e hover effects

## 📞 Contato

- **WhatsApp**: (34) 92522-850
- **Instagram**: @psierikapires
- **Modalidade**: Atendimento Online

## 📄 Licença

Este projeto é propriedade de Erika Pires Reis. Todos os direitos reservados.
