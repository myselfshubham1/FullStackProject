# College Discovery Platform

live at : https://college-discovery-platform-swart.vercel.app

A full-stack web application that helps students discover, compare, and save colleges across India.

## Features

### Authentication

* User Signup
* User Login
* JWT-based Authentication
* Protected Routes

### College Discovery

* Browse colleges
* Search colleges by name
* Filter colleges by type
* Pagination support

### College Details

* Detailed information page for each college
* Fees, rating, placements, city, and type information

### Saved Colleges

* Save favorite colleges
* View saved colleges
* Duplicate save prevention

### College Comparison

* Compare two colleges side-by-side
* Compare:

  * Rating
  * Fees
  * Placements
  * City
  * Type

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Lucide React Icons

### Backend

* Next.js API Routes
* Prisma ORM
* JWT Authentication
* bcrypt

### Database

* PostgreSQL
* Neon Database

---

## Database Schema

### User

* id
* name
* email
* password

### College

* id
* name
* city
* type
* fees
* rating
* placements
* description

### SavedCollege

* id
* userId
* collegeId

---

## API Endpoints

### Authentication

#### Signup

POST `/api/auth/signup`

#### Login

POST `/api/auth/login`

---

### Colleges

#### Get Colleges

GET `/api/colleges`

Query Parameters:

* search
* city
* type
* page

Example:

```bash
/api/colleges?type=IIT&page=1
```

#### Get College Details

GET `/api/colleges/[id]`

---

### Saved Colleges

#### Save College

POST `/api/saved`

#### Get Saved Colleges

GET `/api/saved`

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd college-discovery-platform
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret_key
```

### Run Migrations

```bash
npx prisma migrate dev
```

### Seed Database

```bash
npx prisma db seed
```

### Start Development Server

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## Future Improvements

* College recommendations
* Advanced filters
* User profile page
* College reviews and ratings
* Admin dashboard
* Email verification

---

## Author

Siddharth Tripathi

Built as part of a Full Stack Developer Internship Assessment.
