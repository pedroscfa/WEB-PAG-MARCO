# WEB-PAG-MARCO

# Sovereign Law — Landing Page

Landing page institucional para escritório de advocacia premium. Construída com HTML semântico e CSS puro, sem dependências de frameworks ou bibliotecas externas.

---

## Estrutura do Projeto

```
sovereign-law/
├── index.html
├── README.md
├── assets/
│   └── global.css
└── components/
    ├── navbar.html / navbar.css
    ├── hero.html / hero.css
    ├── domains.html / domains.css
    ├── testimonial.html / testimonial.css
    ├── discretion.html / discretion.css
    ├── legacy.html / legacy.css
    ├── foundations.html / foundations.css
    ├── attorneys.html / attorneys.css
    ├── footer.html / footer.css
    └── email-modal.html
```

Cada seção da página possui seu próprio par `.html` + `.css`, mantendo responsabilidades isoladas e facilitando manutenção independente por componente.

---

## Componentes

### `assets/global.css`
Tokens de design centralizados: paleta de cores, tipografia, escala de tamanhos, espaçamentos, easing de animações e estilos utilitários compartilhados (`container`, `eyebrow`, `btn-primary`, `btn-outline`, `btn-ghost-dark`). Também define o estilo completo do modal de e-mail e a classe `.reveal` usada nas animações de scroll.

### `components/navbar`
Header fixo com fundo transparente que escurece ao rolar a página. Contém logo, links de navegação, ícone de busca e botão de CTA que abre o modal de contato.

### `components/hero`
Seção de abertura com imagem de fundo em zoom suave, overlay em gradiente, título em Cormorant Garamond, ilustração SVG animada de balança e indicador de scroll. Dois botões de ação: um abre o modal de e-mail, outro faz scroll suave até a próxima seção.

### `components/domains`
Grade assimétrica das áreas de atuação (1 card destaque + 3 cards secundários). Cada card possui ícone SVG, descrição e botão "Consultar advogado" que abre o modal contextualizado para aquela prática.

**Áreas cobertas:** Private Wealth · Corporate M&A · Cyber Law · Arbitragem Internacional

### `components/testimonial`
Slider de depoimentos de clientes com navegação por setas. Layout em duas colunas: título e controles à esquerda, citação com avatar e cargo à direita. Botão de contato ao final do bloco esquerdo.

### `components/discretion`
Seção de CTA centralizada com headline de impacto. Dois botões: agendamento de reunião privada e solicitação do perfil institucional, ambos abrindo o modal com contexto próprio.

### `components/legacy`
Duas colunas: texto com citação do sócio fundador à esquerda, dois cards de estatísticas à direita (40+ anos de excelência e 98% de retenção de clientes). Cada card tem seu próprio botão de contato.

### `components/foundations`
Grade com quatro pilares da firma: Missão (card branco largo) + Integrity, Precision e Legacy (cards escuros). Todos os cards possuem botão de e-mail ao advogado na base.

### `components/attorneys`
Grid de três advogados com fotos em escala de cinza, overlay de contato que aparece no hover com botão dourado "Enviar e-mail", e informações de nome, cargo e especialidade abaixo de cada foto.

### `components/footer`
Rodapé escuro com logo, tagline, link de contato rápido, três colunas de navegação (Expertise, Firm, Contact) e barra inferior com política de privacidade e direitos autorais.

### `components/email-modal.html`
Modal overlay reutilizável por toda a página. Recebe contexto dinâmico via JavaScript (`openEmailModal(context, title, sub)`), permitindo que cada botão personalize o título e subtítulo exibidos. O formulário coleta nome, e-mail, telefone, área de interesse e mensagem, e gera um `mailto:` formatado ao ser submetido. Fecha com clique no overlay ou tecla `Escape`.

---

## Design System

| Token | Valor |
|---|---|
| `--ink` | `#0D0F14` — preto-base |
| `--navy` | `#111827` — navy profundo |
| `--slate` | `#1E2A3A` — painéis médios |
| `--gold` | `#C9A96E` — acento primário |
| `--gold-light` | `#E2C896` — hover do acento |
| `--bone` | `#F5F3EE` — off-white quente |
| `--mist` | `#8A8F9A` — texto secundário |

**Tipografia:** Cormorant Garamond (display) · Playfair Display (headings) · Inter (body/UI)

---

## JavaScript

Todo o JavaScript está inline no `index.html`, sem dependências externas. Três responsabilidades:

**Navbar scroll** — adiciona a classe `.scrolled` ao header quando `window.scrollY > 60`, ativando o fundo escuro.

**Scroll reveal** — `IntersectionObserver` observa todos os elementos `.reveal` e adiciona `.visible` quando entram na viewport, disparando a transição de `opacity` + `translateY`.

**Modal de e-mail** — três funções globais: `openEmailModal(context, title, sub)` para abrir e personalizar, `closeEmailModal()` para fechar, e `submitEmail(event)` para montar e disparar o `mailto:`.

---

## Como usar

Abra `index.html` diretamente no navegador — não requer servidor, build ou instalação.

Para personalizar o destinatário dos e-mails, localize e substitua o endereço em `submitEmail()` dentro do `index.html`:

```js
window.location.href = `mailto:contato@sovereignlaw.com?...`
```

Para adicionar um novo componente, crie o par `nome.html` + `nome.css` em `/components`, importe o CSS no `<head>` do `index.html` e insira o HTML no ponto desejado da página.

---

## Compatibilidade

Testado nos navegadores modernos (Chrome, Firefox, Safari, Edge). Responsivo para mobile a partir de 375px de largura. Respeita `prefers-reduced-motion` via transições CSS desativadas pelo sistema operacional.

