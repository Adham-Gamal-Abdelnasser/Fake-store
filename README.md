# Next.js E-commerce Website

This is a Next.js-based e-commerce website built with Tailwind CSS for styling and uses dynamic routing and loading for seamless navigation. The application includes features like product logging and dynamic pages for categories.

## Live Demo

Check out the live website: [Fake Store](https://fakeee-store-inky.vercel.app/products)

## Features

- **Next.js Framework**: Utilized for server-side rendering (SSR) and static site generation (SSG) for improved performance.
- **Tailwind CSS**: Fully responsive design and custom styling using the utility-first CSS framework.
- **Dynamic Routing**: Implemented for search and products, allowing each to have their own dynamically generated pages.
- **Dynamic Loading**: Ensures efficient loading of components and pages, improving user experience.
- **Product Logging**: Products are logged dynamically with real-time updates.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: fake store API

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open browser and navigate to:
   ```
   http://localhost:3000
   ```

## Scripts

- `npm run dev` or `yarn dev`: Starts the development server.
- `npm run build` or `yarn build`: Builds the application for production.
- `npm start` or `yarn start`: Starts the production server.

## Folder Structure

```plaintext
├── components          # Reusable React components
├── pages               # Next.js pages (dynamic routing for search, products, etc.)
├── public              # Static assets (images, icons, etc.)
├── styles              # Tailwind CSS configuration and global styles
├── utils               # Helper functions
├── package.json        # Project metadata and dependencies
```

## Key Functionalities

1. **Dynamic Routing**
   - Each category and product has its own page generated dynamically based on its ID.
   - Example: `/category/[id]` and `/product/[id]`.

2. **Dynamic Loading**
   - Components and pages are dynamically loaded, ensuring optimal performance and reduced initial load time.

3. **Tailwind CSS**
   - Styled using Tailwind CSS for a mobile-first, responsive, and utility-driven design.
   - Custom themes and configurations can be added in the `tailwind.config.js` file.

4. **Product Logging**
   - Products are dynamically fetched and displayed, ensuring real-time updates.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

3. Deploy to a hosting platform such as:
   - **Vercel**: Next.js’s native hosting platform.




