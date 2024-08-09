
# Craft House - E-commerce Website
![2](https://github.com/user-attachments/assets/14492ec1-a2eb-4cd8-80f8-59dc6dfc7b27)



Craft House is a fully responsive e-commerce website where users can buy and sell unique craft items. This project uses React, Tailwind CSS, MongoDB, Express.js, Node.js, and Firebase.

## Live Link

You can view the live version of the site [here](https://craft-house-ad549.web.app).

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git**

## Getting Started

### Clone the Repository

Clone the repository from GitHub and navigate to the project directory:

```bash
git clone https://github.com/Anawrulkabir/Craftpaper-client.git
cd Craftpaper-client
```

### Set Up Environment Variables

To configure the necessary environment variables, follow these steps:

1. **Create the `.env.local` file:**

   Inside the `Craftpaper-client` directory, create a file named `.env.local`.

   ```bash
   touch .env.local
   ```

2. **Add the following environment variables to the `.env.local` file:**

   ```bash
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id

   VITE_API_URL=your_backend_api_url
   ```

   Replace the placeholders (`your_firebase_api_key`, `your_backend_api_url`, etc.) with your actual configuration values.

### Install Dependencies

Install the required dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

### Access the Application

Once the server is running, you can access the application by visiting [http://localhost:3000](http://localhost:3000) in your web browser.
