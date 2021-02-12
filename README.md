# [API] Happy
[![eslint](https://img.shields.io/badge/eslint-6.8.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/BrendoSPinheiro/happy-api/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


## Table of Contents
* <a href='#about'>📝 About</a>
* <a href='#routes'>🛣 Routes</a>
* <a href='#layout'>🖌 Layout</a>
* <a href='#installing'>🔥 Installing</a>
  * <a href='#first-clonet-this-repository'>First Clone this repository</a>
  * <a href='#install-the-dependencies'>Install the dependencies</a>
  * <a href='#sqLite'>SQLite</a>
  * <a href='#migrations'>Migrations</a>
* <a href='#run-api'> 👨🏽‍💻 Run API</a> 


# <p id='about'>📝 About</p>

Next-Level-Week (NLW) is an intensive week promoted by RocketSeat rocket.

Responsible for the business rules of the application, connection to the database and providing the data for the [`web`](https://github.com/BrendoSPinheiro/happy-web) front-end and [`mobile`](https://github.com/BrendoSPinheiro/happy-mobile) mobile.

# <p id='routes'>🛣 Routes</p>

|route|HTTP Method|description
|:---|:---:|:---:
|`/orphanages`|GET|Lists orphanages.
|`/orphanages/:id`|GET|Return one orphanage.
|`/orphanages`|POST|Create a new orphanage.

# <p id='layout'>🖌 Layout</p>

Layout in figma &rarr;
<a href='https://www.figma.com/file/OYtFKRuGEFKMNgeuiOnK8j/Happy-Web-Copy?node-id=2%3A3'> Figma </a>

# <p id='installing'>🔥 Installing</p>

### <p id='first-clonet-this-repository'>First Clone this repository</p>

```shell
$ git clone https://github.com/BrendoSPinheiro/happy-api
```
### <p id='install-the-dependencies'>Install the dependencies</p>
```
$ yarn

# or

$ npm install
```
> Was installed and configured the [`eslint`](https://eslint.org/) to keep the code clean and patterned.

### <p id='sqLite'>SQLite</p>
The application use just one databases: [SQLite](https://www.sqlite.org/index.html).


Store the orphanages. For more information to how to setup your database see:
* [typeorm](https://typeorm.io/#/using-ormconfig)
> You can find the application's `ormconfig.json` file in the root folder.

### <p id='migrations'>Migrations</p>

Remember to run the database migrations:
```
$ yarn typeorm migration:run

# or

$ yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run 
```
> See more information on [TypeORM Migrations](https://typeorm.io/#/migrations).

# <p id='run-api'>👨🏽‍💻 Run API</p>

```
# yarn
$ yarn dev

# or

# npm
$ npm run dev
```

<br>
<br>
<br>
<br>

<div align='center'>
  Project created by: <a href='https://github.com/BrendoSPinheiro' > Brendo Souza ❤ </a>
<div>
