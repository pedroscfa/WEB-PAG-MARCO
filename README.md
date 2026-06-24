# WEB-PAG-MARCO

# Sovereign Law — Landing Page

Landing page institucional para escritório de advocacia premium. Construída com HTML semântico, CSS puro e JavaScript vanilla, sem dependências de frameworks ou bibliotecas externas.

---

## Estrutura do Projeto

O projeto possui uma estrutura simples e direta, com todos os arquivos principais localizados no diretório raiz:

```
WEB-PAG-MARCO/
├── index.html            # Página principal em Português (PT)
├── traducaoIngles.html   # Versão traduzida da página para Inglês (EN)
├── global.css            # Estilos gerais e componentes consolidados (CSS Puro)
├── index.js              # Comportamentos interativos e lógica da interface
└── README.md             # Documentação do projeto
```

Toda a estilização está unificada no arquivo `global.css`, organizando-se em torno de uma arquitetura modular por componentes (Navbar, Hero, Domains, Testimonial, etc.) utilizando convenções inspiradas em BEM.

---

## Componentes do Sistema

### `global.css`
Define as diretrizes visuais e tokens de design centralizados: paleta de cores, tipografia, escala de tamanhos, espaçamentos, easings de animações e utilitários compartilhados. Também centraliza os estilos de todos os componentes da interface (Navbar, Hero, Domains, Testimonial, Discretion, Legacy, Foundations, Attorneys e Footer), incluindo os modais e menus responsivos.

### `index.js`
Centraliza a lógica de interatividade da página, sem dependências externas:
* **Scroll da Navbar** — Adiciona a classe `.scrolled` ao header quando o usuário rola a página além de 60px.
* **Scroll Reveal** — Utiliza o `IntersectionObserver` para revelar elementos com a classe `.reveal` de forma elegante ao entrarem na tela.
* **Slider de Depoimentos** — Controla a alternância dos blocos de citação no componente de depoimentos.
* **Modais de Contato e Galeria** — Controla a exibição, fechamento (via clique fora ou tecla `Escape`) e coleta de informações dos formulários (enviados via `mailto:` formatado).
* **Menu Mobile** — Gerencia a abertura e o fechamento do menu responsivo (hambúrguer) e o travamento do scroll do corpo da página (`body`).

---

## Design System (Tokens)

| Token | Valor | Descrição |
|---|---|---|
| `--ink` | `#0D0F14` | Preto-base elegante |
| `--navy` | `#111827` | Azul marinho profundo para seções escuras |
| `--slate` | `#1E2A3A` | Painéis e tons médios |
| `--gold` | `#C9A96E` | Tom dourado (acento primário) |
| `--gold-light` | `#E2C896` | Hover e destaque do dourado |
| `--bone` | `#F5F3EE` | Off-white quente para fundos claros |
| `--mist` | `#8A8F9A` | Texto secundário e atenuado |

**Tipografia:** Cormorant Garamond (display/títulos principais) · Playfair Display (headings/subtítulos) · Inter (corpo de texto e elementos de interface/UI)

---

## Como Executar o Projeto

Abra o arquivo `index.html` diretamente em qualquer navegador moderno. O projeto funciona de forma 100% estática e offline, dispensando etapas de compilação, bundlers ou servidores locais dedicados.

Para personalizar o e-mail de destino do formulário confidencial, localize e edite a linha correspondente no final da função `submitEmail()` dentro do arquivo `index.js`:

```javascript
window.location.href = `mailto:contato@sovereignlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

---

## Compatibilidade e Responsividade

O site é responsivo para dispositivos móveis a partir de 375px de largura. Possui suporte a animações suaves adaptáveis, respeitando a preferência `prefers-reduced-motion` do sistema operacional do usuário.
