# Enterprise Design System

Welcome to the monorepo for the Enterprise Design System. This repository contains all the packages, applications, and tools that constitute our design system.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [pnpm](https://pnpm.io/installation) (v9 or later)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-org/enterprise-design-system.git
    cd enterprise-design-system
    ```

2.  Install dependencies from the root of the monorepo:
    ```bash
    pnpm install
    ```

### Development

To start all development servers (Storybook, documentation site, etc.) in parallel, run:

```bash
pnpm dev
```

##  Monorepo Structure

This monorepo is powered by [pnpm Workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/repo).

-   `apps/`: Contains applications that consume our packages, such as the documentation site (`docs`) and Storybook (`storybook`).
-   `packages/`: Contains the source code for our distributable packages (e.g., `ui`, `tokens`, `icons`).
-   `style-dictionary/`: Configuration for building design tokens.

## ⚖️ License

This project is licensed under the MIT License. See the LICENSE file for details.