# Valtryx Systems — Site Oficial v2.0

Site institucional completo em React + Vite.
Design nível big tech: preto e branco minimalista, fundo orgânico animado, tipografia editorial.

---

## 🚀 Rodar localmente

```bash
npm install
npm run dev
# http://localhost:5173
```

## 📦 Deploy (Netlify)

```bash
npm run build
# arraste a pasta /dist para netlify.com
```

---

## ⚙️ Configuração

Edite `src/constants/config.js`:

| Campo         | Status        |
|---------------|---------------|
| `whatsapp`    | ✅ já preenchido (+55 93 99213-4184) |
| `email`       | ✅ já preenchido |
| `phone`       | ✅ já preenchido |
| `instagram`   | ✅ já preenchido |
| `contactForm` | 🔴 substitua pelo link do seu Forms |

---

## 🖼️ Substituir imagens dos cases

Edite `src/pages/Cases.jsx` — array `CASES`:
- `img` → URL da imagem real ou caminho `/public/img/case.jpg`
- `link` → URL do site publicado
- `stats` → suas métricas reais

---

## 📁 Estrutura

```
valtryx/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── constants/config.js   ← dados de contato
    ├── styles/global.css
    ├── hooks/useReveal.js
    ├── components/
    │   ├── Background.jsx    ← blobs orgânicos animados
    │   ├── Cursor.jsx
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Hero.jsx          ← parallax wordmark VALTRYX
        ├── Services.jsx      ← 6 serviços
        ├── About.jsx         ← missão + pilares
        ├── Technologies.jsx  ← stack grid (14 tecnologias)
        ├── Cases.jsx         ← portfólio com imagem + link
        ├── Diferenciais.jsx  ← por que a Valtryx
        ├── FAQ.jsx
        └── Contact.jsx       ← WhatsApp + formulário
```

---

## ✨ Features

- ✅ Identidade **Valtryx** preservada (nome, serviços, contato real)
- ✅ Estrutura e estética **302 Software** (blobs, tipografia, layout)
- ✅ Fundo canvas com blobs orgânicos + film grain — zero grades
- ✅ Parallax no wordmark VALTRYX acompanhando o mouse
- ✅ Cursor customizado com blend-mode difference
- ✅ Cases com imagem, hover cinematográfico e link externo
- ✅ Grid de 14 tecnologias do stack real da Valtryx
- ✅ Marquee animado com as especialidades
- ✅ Scroll reveal em todas as seções
- ✅ FAQ acordeão animado
- ✅ Contato com dados reais (+55 93 99213-4184)
- ✅ 100% responsivo
