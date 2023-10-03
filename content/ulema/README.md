# Learning Management System (LMS) Repository

Welcome to the Learning Management System (LMS) repository! This powerful platform allows you to create, manage, and participate in courses with ease. Whether you're a student looking to expand your knowledge or a teacher eager to share your expertise, our LMS has got you covered.

## Key Features

### Browse & Filter Courses

Easily search and filter through a wide range of courses to find the perfect one for your needs.

### Purchase Courses using Stripe

Seamlessly pay for courses using Stripe, ensuring a secure and convenient payment process.

### Track Progress

Mark chapters as completed or uncompleted, and keep track of your progress within each course.

### Student Dashboard

Access a user-friendly dashboard that provides an overview of your enrolled courses and progress.

### Teacher Mode

Empower educators with the ability to create new courses, chapters, and manage course content.

### Create & Reorder Chapters

Effortlessly create new chapters and reorder them using a simple drag-and-drop interface.

### Multimedia Support

Upload thumbnails, attachments, and videos using UploadThing. Video processing is handled by Mux, and you can enjoy HLS video playback using Mux's video player.

### Rich Text Editor

Enhance your chapter descriptions with a rich text editor, making course content engaging and informative.

### Secure Authentication

User authentication is handled by Clerk, ensuring a secure and user-friendly login and registration process.

### Robust Database

Utilize Prisma and a MySQL database hosted on PlanetScale for efficient and reliable data management.

## Prerequisites

Before getting started, ensure you have the following prerequisites installed:

- Node version 18.x.x

## Installation

1. Install the required packages:

   ```bash
   npm i
   ```

2. Set up your environment variables by creating a `.env` file in the root directory of the project. Populate it with the following values:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
   
   DATABASE_URL=
   
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=
   
   MUX_TOKEN_ID=
   MUX_TOKEN_SECRET=
   
   STRIPE_API_KEY=
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   STRIPE_WEBHOOK_SECRET=
   
   NEXT_PUBLIC_TEACHER_ID=
   ```

3. Set up Prisma and your MySQL database on PlanetScale:

   - Generate Prisma client:

     ```bash
     npx prisma generate
     ```

   - Push the database schema:

     ```bash
     npx prisma db push
     ```

4. Start the application:

   ```bash
   npm run dev
   ```

## Get Started

With these easy setup steps, you're ready to start using our Learning Management System. Dive into the world of education, explore courses, create your own content, and enjoy a seamless learning experience!

For any questions, feedback, or issues, please feel free to reach out to our support team. Happy learning! 📚🚀
