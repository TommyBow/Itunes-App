iTunes Search App

This is a simple React application that allows users to search for media items on iTunes and save their favorite items.

How to Use the App:

Clone the repository to your local machine using the following command: git clone

Navigate to the project directory: cd server and cd client

Install the dependencies: npm install (install on both server and client)

Start development server: npm start

Open your web browser and visit http://localhost:3000 to access the application.

Security Measures To ensure the security of the app, the following measures have been taken:

API keys: This app does not require any API keys as it uses a mock API endpoint (/api/search) for demonstration purposes. However, if you were to integrate a real API, it's important to handle API keys securely. One approach is to use environment variables to store the API keys and ensure they are not exposed in the source code repository.

Input validation: The app performs basic input validation to prevent malicious user input. However, it's always recommended to implement server-side validation and sanitization for more robust security.

Network security: The app is built using React and follows best practices for secure communication over HTTPS. It does not perform any sensitive operations or handle user authentication, but if you plan to extend the app, make sure to follow secure coding practices and use encryption where necessary.

Deployed App The app has been deployed and can be accessed at https://starlit-brigadeiros-ffd653.netlify.app/

