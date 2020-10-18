# [API] Happy
[![eslint](https://img.shields.io/badge/eslint-6.8.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/DiegoVictor/happy-api/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Table of Contents
- [📝 About](#about)
- [🛣 Routes](#routes)
- [🔥 Installing](#installing)

# 📝 About

Next-Level-Week (NLW) is an intensive week promoted by RocketSeat rocket.

Responsible for the business rules of the application, connection to the database and providing the data for the [`web`](https://github.com/BrendoSPinheiro/happy-web) front-end and [`mobile`](https://github.com/BrendoSPinheiro/happy-mobile) mobile.

# 🛣 Routes
|route|HTTP Method|description
|:---|:---:|:---:|:---:
|`/orphanages`|GET|Lists orphanages.
|`/orphanages/:id`|GET|Return one orphanage.
|`/orphanages`|POST|Create a new orphanage.

# 🔥 Installing

### First Clone this repositiorie

```shell
$ git clone https://github.com/BrendoSPinheiro/happy-api
```
### Install the dependencies
```
$ yarn

# or

$ npm install
```
> Was installed and configured the [`eslint`](https://eslint.org/) to keep the code clean and patterned.

### SQLite
The application use just one databases: [SQLite](https://www.sqlite.org/index.html).


Store the orphanages. For more information to how to setup your database see:
* [typeorm](https://typeorm.io/#/using-ormconfig)
> You can find the application's `ormconfig.json` file in the root folder.

### Migrations
Remember to run the database migrations:
```
$ yarn typeorm migration:run

# or

$ yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run 
```
> See more information on [TypeORM Migrations](https://typeorm.io/#/migrations).

<br>
<br>
<br>
<br>

<div align='center'>
  Project created by: <a href='https://github.com/BrendoSPinheiro' > Brendo Souza ❤ </a>
<div>