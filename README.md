# Dio Bank

Project developed with basic TypeScript concepts as part of the TypeScript Fullstack Developer course by DIO. Developed for study purposes only.

Base code developed by [Nathally Souza](https://github.com/nathyts).

## Table of Contents

- [Dio Bank](#dio-bank)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Key Features and Functionalities](#key-features-and-functionalities)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Overview

The Dio Banking System is a command-line application designed to simulate basic banking operations using TypeScript classes and object-oriented programming concepts. The application consists of several account types, each with distinct functionalities, and aims to demonstrate basic proficiency in TypeScript development.

### Key Features and Functionalities

- DioAccount: This account type includes deposit and withdraw methods. Deposits increase the balance, while withdrawals are only allowed for active accounts with sufficient balance.

- CompanyAccount: This account type introduces a getLoan method. Active accounts can request loans, which increase their balance based on the loan amount.

- InvestmentAccount: This account type includes a modified deposit method that adds 10 units to the deposited amount.

- Encapsulation and Privacy: All attributes within the account classes are encapsulated and private, adhering to best practices in object-oriented programming. The name and accountNumber attributes are also secured against unauthorized modification.

## Getting Started

### Prerequisites

- Node.js and npm: Ensure that you have Node.js LTS and npm (Node Package Manager) installed on your system. You'll need these to manage dependencies and run the TypeScript code.

- TypeScript: Install TypeScript globally on your system. You can do this using the command:

  ```bash
    npm install -g typescript.
   ```

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
    npm install
   ```

3. Run the project:

   ```bash
    npm run dev
   ```

## Usage

In the `app.ts` file, you'll find instances of each account type being created. The methods of these instances are executed to demonstrate the diverse functionalities of the accounts. Feel free to modify and experiment with them according to your preferences and learning objectives.

## Contributing

Thank you for considering contributing. To contribute to this project, follow these steps:

1. Fork this repository.

2. Create a new branch with a descriptive name related to the feature or bug you're working on.

3. Make your changes, improvements, or fixes in your branch.

4. Test your changes thoroughly.

5. Commit your changes with clear and concise commit messages.

6. Push your changes to your forked repository.

7. Open a pull request (PR) to the main branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have questions, suggestions, or feedback, feel free to reach out.

- [Víctor Ballestrini](https://github.com/vballestrini/)
- [Project Issues](https://github.com/vballestrini/dio-bank/issues)
