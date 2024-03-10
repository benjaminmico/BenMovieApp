# BenMovieApp Installation Guide 🚀

Welcome to the BenMovieApp! This guide will help you set up and run the application on your local environment.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v7 or higher) or yarn
- React Native CLI
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

## Installation Steps

1. Install dependencies

npm install
# or
yarn install


2. For iOS, install CocoaPods dependencies:

```sh
cd ios && pod install && cd ..
```

3. Start the Metro Bundler

```sh
npm start
# or
yarn start
```

4. Run the app on your preferred platform:

```sh
npm run android
# or
npm run ios
# or use yarn
yarn android
# or
yarn ios
```



## What's Inside the Build 🛠️

- React Native & React Navigation: Utilizes the latest React Native version (0.73.5) for cross-platform mobile app development and React Navigation for seamless screen transitions.
- State Management with Zustand: A minimalist state manager that's straightforward and hooks-based, perfect for this project's scale.
- Fast Image Loading: react-native-fast-image for efficient image loading, enhancing
- TypeScript: Ensures type safety and enhances developer experience with auto-completions and error checks.
- Development Tools: ESLint, Prettier, and Husky for code quality and consistency. Commitlint ensures commit messages follow conventional standards.

## Some few notes

- Testing: The initial setup doesn't include Jest for unit and snapshot testing, ensuring app reliability. Component testing with React Testing Library
- CI/CD: The initial setup doesn't include CI/CD. However, GitHub Actions is planned for automated testing and deployment, streamlining the development workflow.
API Integration: Custom API tools were developed for state management, although React Query could be an alternative for more complex cases. The app displays 8 elements by default due to the API's limitations on trending movie selections.
UI Choices: Titles are displayed instead of posters in search results for a smoother experience, considering the potential bandwidth and performance impact of loading high-resolution images.

