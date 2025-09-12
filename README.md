Priya Playwright Automation

🚀 End-to-end test automation framework built with Playwright, TypeScript, and BDD (playwright-bdd).
This project automates the real-world demo site automationexercise.com
and is designed for portfolio showcase + CI/CD integration.

📌 Features

✅ Playwright Native Runner

✅ BDD with Gherkin using playwright-bdd

✅ Page Object Model (POM)

✅ Covers full flows: Login, Registration, Cart, Checkout, Invoice Download

✅ TypeScript for type-safety

✅ ESLint + Prettier for clean code

✅ Ready for GitHub Actions CI/CD

🏗️ Project Structure
```
priya-playwright-automation/
├── features/ # Gherkin feature files
│ ├── login.feature
│ ├── registration.feature
│ ├── cart.feature
│ ├── checkout.feature
│ └── ...
├── steps/ # Step definitions
│ ├── login.steps.ts
│ ├── registration.steps.ts
│ └── ...
├── pages/ # Page Object Model classes
│ ├── LoginPage.ts
│ ├── CartPage.ts
│ └── ...
├── .features-gen/ # Auto-generated tests from bddgen
├── playwright.config.ts # Playwright test config
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── README.md

```
⚙️ Setup

Clone the repo

```
git clone https://github.com/priyakaurgit/playwright-bdd-automation.git
cd playwright-bdd-automation
```

Install dependencies
```
npm install
```

Generate BDD tests
```
npx bddgen
```
▶️ Running Tests

Run all tests:
```
npx playwright test
```

Run with UI mode:
```
npx playwright test --ui
```

Run only tagged scenarios:
```
npx playwright test --grep "@smoke"
```

🧹 Lint & Format

Check code quality:
```
npm run lint
```

Fix lint issues:
```
npm run lint:fix
```

Format code:
```
npm run format
```
📊 Reporting

HTML report is generated after test run:
```
npx playwright show-report
```

🚀 CI/CD (GitHub Actions)

This project includes a sample workflow (.github/workflows/tests.yml) to run tests automatically on push and pull requests.

🧑‍💻 Author

👩 Priya Kaur
    LinkedIn: www.linkedin.com/in/priya-kaur-profile

📌 Portfolio Automation Project
