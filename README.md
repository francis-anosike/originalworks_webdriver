WebDriverIO Test Automation Framework (TypeScript)

Project Overview
This project is a test automation framework built using WebdriverIO + Typescripts, designed to test key user flows of an e-commerce web application.
This framework follows the Page Object Model (POM) design pattern to ensure:
•	Reusability
•	Maintainability
•	Clean test structure

Objective of this Project
The goal of this project is to demonstrate:
•	End-to-end UI test automation
•	Scalable framework design
•	Real-world QA engineering practices

My Tech Stack
•	WebdriverIO
•	Typescripts
•	Node.js
•	Page Object Model (POM)

Project Structure
├── test/
│   ├── specs/
│   │   ├── login.test.ts
│   │   ├── signup.test.ts
│   │   ├── cart.test.ts
│   │   ├── checkout.test.ts
│   │   └── importcart.test.ts
│
│   ├── pageobjects/
│   │   ├── login.page.ts
│   │   ├── signup.page.ts
│   │   ├── product.page.ts
│   │   ├── cart.page.ts
│   │   └── Negativelogin.page.ts
│
├── wdio.conf.ts
├── package.json
└── README.md

Key Features of My Project

Test Coverage
The framework covers major user journeys such as:
•	 Login Functionality
o	Valid login
o	Invalid login (Negative testing)
•	 User Signup
•	 Cart Functionality
o	Add to cart
o	View cart
•	Checkout Process

My Framework Design
Page Object Model (POM)
Each page has its own class to:
•	Store locators
•	Handle actions (click, type, etc.)
Example:
•	login.page.ts → handles login interactions
•	cart.page.ts → handles cart actions
 Test Files (Specs)
Each feature has a dedicated test file:
•	login.test.ts
•	signup.test.ts
•	cart.test.ts
•	checkout.test.ts
Additionally:
•	importcart.test.ts is used to manage/import test flows across page objects
Reusability & Clean Code
•	Centralized page methods
•	Minimal duplication
•	Easy to scale and extend

How to Run Tests
1. Install dependencies
npm install
2. Run tests
npm run wdio

This Project Demonstrates mine
•	Strong understanding of automation frameworks
•	Experience with WebdriverIO ecosystem
•	Ability to implement real-world test scenarios
•	Knowledge of clean code practices in QA
 
 Author
Francis Anosike

