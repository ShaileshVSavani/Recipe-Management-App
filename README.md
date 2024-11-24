# Recipe Management Application - Frontend

This is the **frontend** for the Recipe Management Application, allowing users to create, view, and manage recipes. The app provides features such as user authentication, recipe creation, and a clean, responsive user interface.

## Features

- User Authentication (login/logout functionality).
- Create, view, and edit recipes.
- Upload images for recipes.
- Manage ingredients dynamically.
- Responsive design for all devices.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Ant Design**: UI library for styled components.
- **Axios**: For API calls.
- **Redux**: State management.
- **React Router**: Navigation and routing.
- **CSS Modules**: For styling components.

## Live Demo

Visit the live demo: [Recipe Management Application](https://recipe-management-app-one.vercel.app/)

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- Node.js installed on your system.
- Package manager (npm or yarn).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShaileshVSavani/Recipe-Management-App.git
  
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Folder Structure

```plaintext
src/
│
├── components/       # Reusable UI components
├── pages/            # Application pages (e.g., CreateRecipe, Home, Login)
├── redux/            # State management files
├── styles/           # CSS styles for components
├── App.js            # Main app entry point
└── index.js          # React entry point
```

## Key Pages

1. **Home Page**: Displays a list of all recipes.
2. **Create Recipe Page**: Allows users to create new recipes with fields like name, description, ingredients, instructions, and an image.
3. **Login Page**: Enables user authentication.