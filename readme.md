# Simple React Form with Node.js Backend and React.js Frontend

This repository contains a simple form application built with Node.js as the client and React.js as the server. This project demonstrates how to create a basic form using these technologies.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js: Make sure Node.js is installed on your system. You can download it from [here](https://nodejs.org/).
- npm: npm comes with Node.js. Check if you have npm installed by running `npm -v` in your terminal.

## Getting Started

Follow these steps to get this project up and running on your local machine:

1. **Clone the repository:**

    ```
    git clone https://github.com/Sam23599/Simple-React-Form
    ```

2. **Install backend server dependencies:**

    Navigate to the server directory and run:

    ```
    cd server
    npm install
    ```

3. **Start the backend server:**

    ```
    npm start
    ```

    This will start the Node.js server on `http://localhost:8000`.

4. **Install frontend client dependencies:**
    
    Navigate to the client directory and run:

    ```
    cd client
    npm install
    ```

5. **Start the frontend client server:**

    ```
    npm start
    ```

    This will start the React development server on `http://localhost:3000`.

6. **Open the application in your browser:**

   Open your browser and go to `http://localhost:3000` to view the form.

## Usage

Once the project is running, you can fill out the form with your desired data and submit it. The submitted data will be sent to the backend server, where you can process it as needed.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Node.js:** A JavaScript runtime environment that executes JavaScript code outside a web browser.

## Folder Structure

- **client/**: Contains the client-side code built with React.js.
- **server/**: Contains the server-side code built with Node.js.


## Dependencies

- **Node.js**: JavaScript runtime environment.
- **React.js**: JavaScript library for building user interfaces.
- **React DOM**: Entry point for React rendering.
- **React Router DOM**: Declarative routing for React applications.
- **Express.js**: Web application framework for Node.js.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **bcrypt**: Library for hashing passwords.
- **Joi**: Object schema description language and validator for JavaScript objects.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **jsonwebtoken**: Implementation of JSON Web Tokens (JWT).
- **dotenv**: Module that loads environment variables from a `.env` file into `process.env`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.