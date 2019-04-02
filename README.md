[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# API Token Authentication

## Introduction

Using curl and jQuery.ajax to access an authenticated API with html forms to
sign up, sign in, and sign out of an API. We'll also change our passwords. The
API uses Token authentication and we'll see how to make authenticated requests
(sign out and change password).

## Prerequisites

- [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
- [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests using `curl`, the browser address bar, and AJAX to:
  - access an authenticated API.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.
2. Run the application with `grunt serve`

## Using web APIs

Why is authentication an important topic?

Web APIs often require some sort of authentication.  The game API requires users
to register and then login to gain an authentication token.

We'll use `curl` and `jQuery.ajax` to explore HTTP further. Then we'll make
requests to and receive responses from a HTTP server hosted at
`https://wdi-library-api.herokuapp.com`.

We'll make use of the [WDI Library API docs](https://git.generalassemb.ly/ga-wdi-boston/library-api)
to help us make the correct requests to the API.

The operations we'll perform:

| verb   | path | parameters |
| ------ | ---- | ---------- |
| POST   | `/sign-up` | `credentials` containing `email`, `password`, `password_confirmation` |
| POST   | `/sign-in` | `credentials` containing `email` and `password` (response contains auth data) |
| PATCH  | `/change-password` | `passwords` containing `old` and `new` (requires Authorization header) |
| DELETE | `/sign-out` | None (requires Authorization header) |

## Important Security Note

The APIs we work with in WDI are built for educational purposes only, and
therefore are **not secure** enough to protect sensitive, real world data. What
this means is that you must **never** use a real email or password when signing
up for these accounts. It would not be difficult for someone with bad intentions
to decrypt your password, and if you've used that password same for real life
accounts (email, etc) they could gain access.

## CURL Gotchas

We'll be using a lot of curl scripts as we send requests to our API, so it's
important to remember some of the common pitfalls in writing and running curl
scripts.

1. The following **are not** valid in a curl request:

  - Trailing commas in the json body.
  - Comments after the `curl` keyword.
  - Missing back slashes after each option.

1. We use constants in our curl requests, which are in `CAPITAL_LETTERS`.
Your curl request will not work correctly if you don't assign values to
those constants. (i.e. `TITLE='Ancillary Justice'`).

  - Spaces between values assigned to variables in the terminal **are not**
valid and **will not** run your curl script.

1. *Curl Script execution example:*
   `EMAIL=pikachu@example.com PASSWORD=pikachu sh curl-scripts/auth/sign-up.sh`

## Registering with the API

### Code along: Write a sign-up script

Let's register with the API.

We'll modify `curl-scripts/auth/sign-up.sh` to send a request with JSON
data to the `wdi-library-api`.

What response do we get?

### Code along: Sign-up from our client

Now let's put code into `assests/scripts/auth/*` to get another "e-mail" address
registered with the API.

## Logging into the API

### Lab: Write a sign-in script

Now with json data in `curl-scripts/auth/sign-in.sh`, let's sign in to the
account we just created.

### Lab: Sign-in from the client

Add a form to `index.html` and code to `assets/scripts/auth/*` to login to the
API.

What should we do with the data returned by the API?

## Changing the password

### Code along: Write/Execute a change-password scripts

We'll use `curl-scripts/auth/change-password.sh` to change a password. After
that we'll verify that we can no longer authenticate using the old password.

### Code along: Change password from the client

Add a change password form to `index.html` and code to `assets/scripts/auth/*`
to change the password.

## Signing out

Signing out invalidates the current token.

### Lab: Write/Execute a sign-out script

We'll use `curl-scripts/auth/sign-out.sh` to sign out of the API. We'll verify that
the token we used is no longer valid.

### Lab: Sign out from the client

Add a sign out `form` with a button to `index.html` and code to
`assets/scripts/auth/*` to sign out of the API when a user submits the `form`.

## Authenticated Resources

Now that we can sign up and sign in to our API, let's add and modify our own
resources.

| verb   | path | parameters |
| ------ | ---- | ---------- |
| POST | `/examples` | `example` containing `text` (requires Authorization header) |
| GET | `/examples` | None (requires Authorization header) |
| GET | `/examples/:id` | None (requires Authorization header) |
| PATCH | `/examples/:id` | `example` containing `text` (requires Authorization header) |
| DELETE | `/examples/:id` | None (requires Authorization header) |

### Code along: Create an Example

First, we'll modify `curl-scripts/examples/create.sh` to make an authenticated
request to our API to create an example.

Now, let's add code to `assests/scripts/examples/*` to create an example from
the browser.

### Lab: Get all Examples

Modify `curl-scripts/examples/index.sh` to make a request to our API to get all
examples.

Add code to `assests/scripts/examples/*` to get all examples from the browser.

### Lab: Get one Example

Modify `curl-scripts/examples/show.sh` to make a request to our API to get one
example.

Add code to `assests/scripts/examples/*` to get an example from the browser.

### Lab: Destroy an Example

Modify `curl-scripts/examples/destroy.sh` to make an authenticated request to
our API to destroy an example.

Add code to `assests/scripts/examples/*` to destroy an example from the browser.

### Lab: Update an Example

Modify `curl-scripts/examples/update.sh` to make an authenticated request to our
API to update an example.

Add code to `assests/scripts/examples/*` to update an example from the browser.

## Tasks

Developers should run these often!

- `grunt nag`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Differences in json & x-www-form-urlencoded](https://stackoverflow.com/questions/9870523/differences-in-application-json-and-application-x-www-form-urlencoded)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
