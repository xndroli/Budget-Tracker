<a name="readme-top"></a>

<h3 align="center">Progressive Web App (PWA): Budget Tracker</h3>

<div align="center">

[![MongoDB](https://img.shields.io/badge/MongoDB-green.svg)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/expressjs-orange.svg)](https://expressjs.com/)
[![Mongoose.js](https://img.shields.io/badge/mongoosejs-red.svg)](https://mongoosejs.com/)
[![Heroku](https://img.shields.io/badge/heroku-purple.svg)](https://heroku.com/)

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Repo Size](https://img.shields.io/github/repo-size/xndroli/Budget-Tracker.svg)](https://github.com/xndroli/Budget-Tracker/issues)
[![GitHub Issues](https://img.shields.io/github/issues/xndroli/Budget-Tracker.svg)](https://github.com/xndroli/Budget-Tracker/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/xndroli/Budget-Tracker.svg)](https://github.com/xndroli/Budget-Tracker/pulls)

</div>

---

## 🔗 Description <a name = "description"></a>

Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information.

This week I will update an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online. Once I’ve made these changes, I’ll deploy the application to Heroku. [See Live Application](https://young-shore-73823.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 Table of Contents

- [Description](#description)
- [User Story](#user_story)
- [Acceptance Criteria](#acceptance_criteria)
- [Demo](#demo)
- [Deployed Application](#deployed_application)
- [Installation](#installation)
- [Usage](#usage)
- [Technology](#built_with)
- [Authors](#authors)
- [Contributing](../CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💡 User Story <a name = "user_story"></a>

```md
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛓️ Acceptance Criteria <a name = "acceptance_criteria"></a>

```md
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📸 Demo <a name = "demo"></a>

[![Budget Tracker Deployed Progressive Web Application](./public/images/pwa-budget-tracker-demo.png)](https://young-shore-73823.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📲 Live App <a name = "deployed_application>

[See Live Deployed Application on Heroku](https://young-shore-73823.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🏁 Getting Started <a name = "getting_started"></a>

Clone the repo by running:

`git clone https://github.com/xndroli/Budget-Tracker.git `

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 💾 Installation <a name = "installation"></a>

Input basic project information in include in your package by running:

`npm init`

Install the package, and any packages that it depends on by running:

`npm i`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Usage <a name="usage"></a>

Run the following command at the root of your project:

`npm start`

If you have nodemon:

`npm run watch`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛏️ Built With <a name = "built_with"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express.js](https://expressjs.com/) - Server Framework
- [Mongoose.js](https://mongoosejs.com/) - Object Data Modeling
- [Node.js](https://nodejs.org/) - Server Environment
- [Morgan](https://github.com/expressjs/morgan) - HTTP Request Logger Middleware for Node.js
- [Compression](https://github.com/expressjs/compression) - Node.js Compression Middleware
- [Heroku](https://www.heroku.com/) - Depolyment Platform

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✍️ Authors <a name = "authors"></a>

- [@xndroli](https://github.com/xndroli)

See also the list of [contributors](https://github.com/xndroli/Budget-Tracker/contributors) who participated in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

© 2022 xndroli. All Rights Reserved.
