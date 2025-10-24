# Dinosaur Amplify

A small, playful web app built to celebrate Dinosaur Day (June 1). It was inspired by an Instagram post from @cranbookscience and created for the kids I work with — a light-hearted demo of Next.js (App Router) deployed on AWS Amplify.

[Live demo](https://main.d2uqitvsgbbhaz.amplifyapp.com/)

## Table of contents
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local development](#local-development)
  - [Build for production](#build-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About
This is a small Next.js app using the App Router that focuses on simple, kid-friendly visuals and interactions. It was built as an exercise in deploying Next.js (App Router) apps to AWS Amplify and to provide an entertaining little experience for children.

## Features
- Fun, dinosaur-themed UI
- Responsive layout for desktop and mobile
- Built with Next.js App Router
- Deployed to AWS Amplify for easy hosting

## Tech stack
- Next.js (App Router)
- HTML & CSS
- AWS Amplify (hosting)

## Getting started

### Prerequisites
- Node.js (>= 16 recommended)
- npm or yarn
- Git

### Local development
1. Clone the repo
   ```bash
   git clone https://github.com/tramanhvong/dinosaur_amplify.git
   cd dinosaur_amplify
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open http://localhost:3000 in your browser.

### Build for production
```bash
npm run build
npm start
# or with yarn
yarn build
yarn start
```

## Deployment
This project is deployed using AWS Amplify. If you want to deploy your own copy:
- Connect your GitHub repository to an Amplify app
- Ensure the build settings support Next.js App Router (Amplify provides presets)
- Deploy and visit the Amplify-generated domain

Live deployment: https://main.d2uqitvsgbbhaz.amplifyapp.com/

## Contributing
Contributions are welcome — open an issue or submit a pull request. Keep changes focused and add notes in the PR about what you changed and why.

## License
This project is licensed under the MIT-0 License. See the LICENSE file for details.

## Acknowledgements
- Inspired by an Instagram post from @cranbookscience
- Built for Dinosaur Day (June 1) — a small project made for kids and curiosity
