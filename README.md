# Notes App

This is a **Notes App** built with **React**, **TypeScript**, **Vite**, and **Supabase**. The app allows users to create, read, update, and delete notes. It also includes user authentication (signup and login) powered by Supabase.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Supabase Integration](#supabase-integration)
  - [Database Schema](#database-schema)
  - [Row-Level Security (RLS) Queries](#row-level-security-rls-queries)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Signup and login functionality using Supabase.
- **CRUD Operations**: Create, read, update, and delete notes.
- **Responsive Design**: The app is designed to work on various screen sizes.
- **Real-Time Updates**: Notes are fetched and displayed in real-time.
- **Error Handling**: User-friendly error messages for failed operations.
- **Custom Styling**: TailwindCSS is used for styling.

---

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Supabase (PostgreSQL database and authentication)
- **Styling**: TailwindCSS
- **State Management**: React's built-in state management
- **Routing**: React Router
- **Utilities**: Moment.js for date formatting

---

## Project Structure

```
.
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── libs/              # Supabase client setup
│   ├── pages/             # Page components for routing
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── assets/rls-queries/    # Images of RLS queries
├── .env.example           # Example environment variables
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- A Supabase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Replace `your-supabase-url` and `your-supabase-anon-key` with your Supabase project credentials.

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase using ESLint.

---

## Folder Structure

### `/src/components`

Contains reusable UI components such as buttons, input fields, modals, and headers.

### `/src/pages`

Contains page components for routing, including:

- `Home.tsx`: Displays a list of notes.
- `Login.tsx`: Login page.
- `Signup.tsx`: Signup page.
- `CreateNote.tsx`: Page for creating a new note.
- `EditNote.tsx`: Page for editing an existing note.
- `Note.tsx`: Displays a single note.

### `/src/hooks`

Contains custom React hooks, such as `useUser` for managing user authentication state.

### `/src/libs`

Contains the Supabase client setup.

### `/src/types`

Contains TypeScript type definitions, such as the `Database` interface for Supabase.

### `/src/utils`

Contains utility functions, such as SQL queries.

---

## Supabase Integration

This app uses Supabase for:

1. **Authentication**: Users can sign up, log in, and stay authenticated.
2. **Database**: Notes are stored in a PostgreSQL database managed by Supabase.

### Database Schema

The `notes` table has the following structure:

| Column       | Type    | Description                     |
|--------------|---------|---------------------------------|
| `uuid`       | UUID    | Primary key                    |
| `title`      | String  | Title of the note              |
| `content`    | Text    | Content of the note            |
| `last_updated` | Timestamp | Last updated timestamp       |
| `user_id`    | UUID    | Foreign key referencing users  |

---

### Row-Level Security (RLS) Queries

This project uses **Row-Level Security (RLS)** in Supabase to ensure that users can only access their own notes. The RLS policies are defined in the Supabase dashboard and are critical for securing the database.

You can find example RLS queries in the `assets/rls-queries` folder. These images illustrate how the RLS policies are configured in Supabase. Go to supabase dashboard, navigate to the `Database` section, and then to `Policies` to view and manage these policies.

#### Example RLS Policy

- **Policy Name**: `Allow users to access their own notes`
- **Condition**: `auth.uid() = user_id`
- **Effect**: Ensures that only the user who created a note can access or modify it.

For more details, refer to the images in the `assets/rls-queries` folder or consult the [Supabase RLS Documentation](https://supabase.com/docs/guides/auth/row-level-security).

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.