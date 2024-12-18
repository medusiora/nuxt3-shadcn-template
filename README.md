# Nuxt 3 Admin Template

Welcome to the **Nuxt 3 Admin Template**, an advanced and modern admin dashboard built using [Nuxt 3](https://nuxt.com/) and the [shadcn-vue](https://www.shadcn-vue.com/). This project serves as a solid foundation for creating scalable, feature-rich admin panels.

> 🚧 **Note**: This project is currently under development and is not yet complete. Expect frequent updates and potential breaking changes.

---

## Features

- **Nuxt 3 Framework**: Leverage the power of Nuxt 3 for server-side rendering, static site generation, and hybrid rendering.
- **shadcn-vue**: Pre-styled and highly customizable UI components for a seamless development experience.
- **Tailwind CSS**: Fully integrated for rapid styling and responsive design.
- **Composable Architecture**: Utilize Nuxt's composition API for modular and maintainable code.
- **Dark Mode Support**: User-friendly light and dark themes out of the box.
- **Dynamic Routing**: Easily add new pages and routes using Nuxt's file-based routing system.
- **State Management**: Integrated Pinia for efficient state handling.
- **TypeScript Ready**: Type-safe development with TypeScript support.

---

## Customization

### Tailwind Configuration

Tailwind CSS can be customized via the `tailwind.config.js` file located in the root directory.

### Adding Components

Add new components under the `components/` directory and use them across your application. Components from `shadcn-vue` can be easily imported and customized.

### State Management

Use the `store/` directory to define and manage application state using Pinia.

---

## Acknowledgements

Special thanks to:

- [Nuxt.js](https://nuxt.com/)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
