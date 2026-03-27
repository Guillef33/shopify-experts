# G&A Studio — Shopify Agency Landing Page

Landing page base para Guillermo & Alfredo — Shopify developers y CRO specialists.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**
- **Google Fonts:** Bebas Neue (display) + Syne (headings) + Plus Jakarta Sans (body)

## Setup

```bash
# 1. Instalar dependencias
npm install

# 2. Dev server
npm run dev

# 3. Build para producción
npm run build
npm start
```

Abrir [http://localhost:3000](http://localhost:3000)

## Estructura

```
shopify-agency/
├── app/
│   ├── globals.css       # Estilos globales, animaciones, variables CSS
│   ├── layout.tsx        # Root layout con Google Fonts
│   └── page.tsx          # Página principal (ensambla todos los componentes)
├── components/
│   ├── Navbar.tsx        # Header sticky con scroll effect
│   ├── Hero.tsx          # Hero section con headline gigante + floating badges
│   ├── Ticker.tsx        # Marquee de servicios
│   ├── Stats.tsx         # KPIs / métricas (4 columnas)
│   ├── Services.tsx      # Grid de 6 servicios
│   ├── Work.tsx          # Portfolio / proyectos
│   ├── About.tsx         # Equipo — Guillermo & Alfredo
│   ├── Process.tsx       # Timeline del proceso de trabajo
│   ├── SocialProof.tsx   # Testimonios + Tech stack
│   ├── Contact.tsx       # CTA final + contact
│   └── Footer.tsx        # Footer con segundo ticker
└── tailwind.config.ts
```

## Personalización

### Colores
En `tailwind.config.ts` y `globals.css`:
- **`#00C853`** → Verde principal (Shopify-inspired)
- **`#0A0A0A`** → Fondo negro
- **`#F0EBE1`** → Crema/blanco cálido para textos

### Contenido
- **About:** Actualizar bios en `components/About.tsx`
- **Work:** Agregar proyectos reales en `components/Work.tsx`  
- **Stats:** Actualizar métricas en `components/Stats.tsx`
- **Contact:** Agregar email real de Alfredo en `components/Contact.tsx`
- **Testimonials:** Reemplazar con testimonios reales en `components/SocialProof.tsx`

### Fonts
Se cargan desde Google Fonts en `app/layout.tsx` via `next/font/google`. Zero layout shift.

## Deployment

Compatible con Vercel, Netlify, o cualquier hosting de Node.js.

```bash
# Vercel (recomendado)
npx vercel
```

## TODOs para completar

- [ ] Agregar imágenes/screenshots reales de proyectos en el portfolio
- [ ] Conectar formulario de contacto (Formspree, EmailJS, o API route)
- [ ] Agregar el email real de Alfredo en Contact.tsx
- [ ] Reemplazar testimonios con clientes reales
- [ ] Agregar logo/favicon propio
- [ ] Configurar dominio en Vercel
- [ ] SEO: actualizar meta tags en `app/layout.tsx`
