# Cloning and installation
Clone this repository to your local machine. To do this, click on the green "Code" button at the top right of list of files and copy the link in the prompt. Then, run the following command in your terminal:

    git clone <link>

This will create a folder called 'ruby-exercises' inside the directory you ran the command in.

CD into that folder:

    cd nuxt-app


Next make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

To locally run project , start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev -o

# pnpm
pnpm run dev -o

# yarn
yarn dev -o

# bun
bun run dev -o
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Stack
Technologies:
    - Nuxt 3
    - TypeScript
    - TailwindCSS
    - DaisyUI
Used API:
    - https://date.nager.at/
