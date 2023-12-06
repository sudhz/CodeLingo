# CodeLingo

CodeLingo is a code explainer tool that provides detailed explanation for your code and the option to translate this explanation into various local languages. Built using ReactJS, TailwindCSS, CodeLlama-34b-Instruct-hf, and Amazon Translate. It's designed to make understanding code snippets easier for beginner developers.

![CodeLingo Logo](https://i.imgur.com/2DmiTWG.png)

## Table of Contents

- [Features](#features)
- [Local Installation](#local-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Interactive Editor**: Uses Monaco code editor for a familiar VSCode-style interface.
- **Language Support**: Provides syntax highlighting for multiple programming languages.
- **Streaming Explanation**: Dynamic, real-time explanation streaming for your code.
- **Translation**: Offers translation of explanations into various local languages with the power of Amazon Translate.
- **Server Status Indicator**: Easily check if the server is online or offline.
- **Social Links**: Quick access to the project's GitHub repository and the developer's LinkedIn profile.

## Local Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sudhz/CodeLingo.git
   ```

2. **Install the Dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create or update the `.env.local` in the root directory of your project with the following keys:

   ```
   VITE_API_KEY=(Deepinfra API key) # Obtain it from the Deepinfra dashboard
   VITE_AWS_ACCESS_KEY_ID=(aws access key id) # Obtain this from your AWS console.
   VITE_AWS_SECRET_ACCESS_KEY=(your aws secret access key) # Obtain this from your AWS console.
   ```

   [Link to Deepinfra](https://deepinfra.com/)

4. **Spin up the Development Server**

   ```bash
   npm run dev
   ```

   Once the development server is up, navigate to [localhost:5173](http://localhost:5173) in your browser.

5. **(Optional) Build for Production**

   If you need to create a production-ready build, you can use:

   ```bash
   npm run build
   ```

## Usage

1. Navigate to the [website](https://codelingo.netlify.app/).
2. Input your code into the code editor on the left side of the screen.
3. Choose your code's language from the dropdown for appropriate syntax highlighting.
4. Click the "Explain" button to get a streaming explanation of your code on the right side.
5. After receiving the full explanation, select your desired translation language from the "Explanation Language" dropdown.
6. Click "Translate" to receive the explanation in your chosen language.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- [ReactJS](https://react.dev/): For providing the foundational framework.
- [TailwindCSS](https://tailwindcss.com/): For the sleek and responsive design.
- [Flowbite-React](https://www.flowbite-react.com/): For the awesome buttons and dropdowns.
- [Deepinfra](https://deepinfra.com/): For the dynamic explanations using CodeLlama-34b-Instruct-hf.
- [Amazon Translate](https://docs.aws.amazon.com/translate/latest/dg/what-is.html): For making translations seamless.
