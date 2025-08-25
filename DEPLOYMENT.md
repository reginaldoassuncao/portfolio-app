# 🚀 Guia de Deploy - Portfólio Reginaldo Assunção

Este documento contém todas as informações necessárias para fazer o deploy do portfólio em diferentes plataformas.

## 📦 Build de Produção

O projeto já está configurado e otimizado para produção:

```bash
# Gerar build otimizado
npm run build

# Preview local da build
npm run preview
```

### 📊 Métricas da Build
- **Total**: ~356 KB (90 KB gzipped)
- **CSS**: 95.84 KB (12.80 KB gzipped)
- **JavaScript**: 256.5 KB (80.63 KB gzipped)
- **HTML**: 3.57 KB (1.26 KB gzipped)

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

**Por que Vercel?**
- ✅ Especializada em React/Vite
- ✅ Deploy automático via GitHub
- ✅ CDN global gratuito
- ✅ Preview deployments
- ✅ Analytics incluído

**Como fazer deploy:**

```bash
# Opção 1: Via CLI
npm i -g vercel
vercel

# Opção 2: Via GitHub (mais fácil)
1. Push para GitHub
2. Conecte Vercel ao repositório
3. Deploy automático
```

**Configurações Vercel:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify

**Como fazer deploy:**

```bash
# Opção 1: Via drag & drop
1. npm run build
2. Arrastar pasta 'dist' para Netlify

# Opção 2: Via GitHub
1. Conectar repositório
2. Configurar build settings
```

**Configurações Netlify:**
- Base directory: `/`
- Build command: `npm run build`
- Publish directory: `dist`

**Arquivo netlify.toml** (opcional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Como fazer deploy:**

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar scripts no package.json
"homepage": "https://reginaldo-assuncao.github.io/portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. Firebase Hosting

```bash
# Instalar CLI
npm install -g firebase-tools

# Login e init
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

## ⚙️ Configurações Importantes

### Variáveis de Ambiente

Criar arquivo `.env.production` se necessário:
```env
VITE_APP_TITLE="Reginaldo Assunção - Desenvolvedor Full Stack"
VITE_APP_URL="https://reginaldo-assuncao.dev"
VITE_GA_ID="G-XXXXXXXXXX"
```

### Custom Domain (opcional)

Para domínio personalizado (ex: reginaldo-assuncao.dev):

1. **Comprar domínio** (Namecheap, GoDaddy, etc.)
2. **Configurar DNS** apontando para o provider
3. **Certificado SSL** (automático no Vercel/Netlify)

## 🔧 Otimizações Implementadas

### Performance
- ✅ Code splitting (vendor/icons/main)
- ✅ CSS minificado e otimizado
- ✅ Images otimizadas
- ✅ Tree shaking automático
- ✅ Gzip compression

### SEO
- ✅ Meta tags completas
- ✅ Open Graph
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml (se necessário)

### Acessibilidade
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Focus indicators
- ✅ Color contrast
- ✅ Reduced motion support

## 📈 Monitoramento Pós-Deploy

### Ferramentas Recomendadas
- **Google Analytics** - Tráfego e comportamento
- **Google Search Console** - SEO e indexação
- **Lighthouse CI** - Performance contínua
- **Vercel Analytics** - Core Web Vitals

### Checklist Pós-Deploy
- [ ] Site carregando corretamente
- [ ] Dark/Light mode funcionando
- [ ] Todas as seções navegáveis
- [ ] Formulário de contato testado
- [ ] Responsive em diferentes dispositivos
- [ ] SEO tags validadas
- [ ] Performance score > 90

## 🚀 Deploy Rápido - Passo a Passo

### Opção Mais Simples (Vercel):

1. **Push para GitHub**
   ```bash
   git add .
   git commit -m "feat: portfolio completo"
   git push origin main
   ```

2. **Conectar Vercel**
   - Acesse vercel.com
   - Login com GitHub
   - Import project
   - Deploy automático

3. **URL pronta!**
   - Receba URL: `portfolio-app-xxx.vercel.app`
   - Configure domínio custom (opcional)

### Resultado Esperado
- ✅ Site em produção
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Deploy automático em novos commits

## 📞 Suporte

Em caso de dúvidas durante o deploy:
- **Email**: reginaldo.assuncao@email.com
- **GitHub Issues**: github.com/reginaldo-assuncao/portfolio/issues

---

**Deploy realizado com sucesso! 🎉**