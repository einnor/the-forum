# the-forum

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd the-forum`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


### Backend Contract (Coming Soon)

API Contract / Documentation

Categories

GET /api/categories - 200 []
POST /api/categories  - 201 created category
PUT /api/categories/:id - 201 updated category
DELETE /api/categories/:id - 201

Accounts

POST /api/accounts  - 201 sign up
POST /api/accounts  - 201 sign in
PUT /api/accounts/:id/deactivate - 201 - Deactivate account
PUT /api/accounts/:id/activate - 201 - Activate account

Posts. (Authenticated)

GET /api/posts - 200 []
POST /api/posts - { title, content, categoryId } headers: { authorisation: ‘’Bearer token }  - 201 created post
PUT /api/posts/:id - { title, content, categoryId } headers: { authorisation: ‘’Bearer token } - 201 updated post
DELETE /api/posts/:id - { title, content, categoryId } headers: { authorisation: ‘’Bearer token } - 201

Comments (Authenticated)

GET /api/posts/:postId/comments - 200 []
POST /api/posts/:postId/comments - created comment
DELETE /api/posts/:postId/comments/:commentId - created comment

Favourites (Authenticated)

PUT /api/posts/:postId/favorite - 201 (Toggle)
PUT /api/posts/:postId/unfavorite - 201 (Toggle)