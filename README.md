# Craft House

![2](https://github.com/user-attachments/assets/a7d4f0c2-d86a-4093-82ab-6d5567a5aef0)



Craft House is a fully responsive e-commerce website where users can buy and sell unique craft items. Built using React, Tailwind CSS, and various other technologies, this project features a sleek and modern interface for managing craft-related transactions.

## Live Demo

You can view the live demo of the project at: [craft-house-ad549.web.app](https://craft-house-ad549.web.app)

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git**

## Getting Started

### Clone the Repository

Clone the repository from GitHub and navigate to the project directory:

```bash
git clone https://github.com/yourusername/craft-house-client.git
cd craft-house-client
```

### Set Up Environment Variables

To configure the necessary environment variables, follow these steps:

1. **Create the `.env.local` file:**

   Inside the project directory, create a file named `.env.local`.

   ```bash
   touch .env.local
   ```

2. **Add the following environment variables to the `.env.local` file:**

   ```bash
   VITE_APIKEY=your_firebase_api_key
   VITE_AUTHDOMAIN=your_firebase_auth_domain
   VITE_PROJECTID=your_firebase_project_id
   VITE_STORAGEBUCKET=your_firebase_storage_bucket
   VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
   VITE_APPID=your_firebase_app_id
   VITE_MEASUREMENTID=your_firebase_measurement_id
   VITE_CONNECTION_STRING=your_mongodb_connection_string
   VITE_IMGBB_API_KEY=your_imgbb_api_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

   Replace the placeholders (`your_firebase_api_key`, `your_mongodb_connection_string`, etc.) with your actual configuration values.

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

## Contributing

If you would like to contribute to the project, please submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
