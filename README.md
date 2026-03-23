# Chirps HTTP Server
A robust backend REST API for the Chirps application, built with Node.js, Express, and TypeScript. This server handles user authentication, chirp management, and persists data using PostgreSQL.
## Features
- **User Authentication**: Secure signup and login using Argon2 hashing and JWT.
- **Chirps Management**: Create, retrieve, and view chirps.
- **Data Persistence**: Uses PostgreSQL with Drizzle ORM for type-safe database interactions.
- **Metrics & Health**: Includes endpoints for server health and metrics.
- **Static File Serving**: Serves the frontend application from the `/app` route.
## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Argon2 (hashing), JSON Web Tokens (JWT)
- **Testing**: Vitest
## Prerequisites
- Node.js (v20+ recommended)
- PostgreSQL database
## Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
PORT=8080
PLATFORM=local
DB_URL=postgres://user:password@localhost:5432/chirps_db
JWT_SECRET=your_super_secret_jwt_key
```
## Installation & Running
1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run in Development Mode:**
    ```bash
    npm run dev
    ```
    This starts the server with `tsc` and `node`, watching for changes.
3.  **Build and Start Production:**
    ```bash
    npm run build
    npm start
    ```
4.  **Run Tests:**
    ```bash
    npm test
    ```
## API Endpoints
### Authentication & Users
-   `POST /api/users`: Create a new user account.
-   `POST /api/login`: Log in and receive a JWT.
### Chirps
-   `POST /api/chirps`: Create a new chirp (requires authentication).
-   `GET /api/chirps`: Retrieve a list of chirps.
-   `GET /api/chirps/:chirpId`: Get details of a specific chirp.
### Admin & System
-   `GET /api/healthz`: Health check endpoint.
-   `GET /admin/metrics`: View server metrics.
-   `POST /admin/reset`: Reset server data (use with caution).
## Project Structure
-   `src/api`: Route handlers and controllers.
-   `src/db`: Database schema and migration configuration.
-   `src/app`: Static frontend assets.
-   `src/index.ts`: Application entry point.
-   `drizzle.config.ts`: Drizzle ORM configuration.
