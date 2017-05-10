# Snippet List

This project is a code snippet collector. The concept is simple. Each item in the collection has a title and open text field to hold a code sample.

All developers have huge collections of bookmarks to articles, documentation, samples, etc. What I have find myself looking for most often is an example of how to do something. These solutions often get lost in the clutter of all the other related bookmarks managed by the browser.

## Project Links
- Client GitHub Repository: https://github.com/pjliddy/snippet-list-client
- Client Deployed: https://pjliddy.github.io/snippet-list-client/
- API GitHub Repository: https://github.com/pjliddy/snippet-list-api
- API Deployed: https://snippet-list-api.herokuapp.com/

## Approach

After creation of initial user stories and wireframes, the project was completed by following a lean, iterative approach. An MVP prototype was built to test and guarantee core functionality while leveraging tools like Bootstrap and Handlebars to maximize the quality of the output and allow for more focus on features.

The core steps in the approach:

1. Set up a **Rails back end** based on the user authentication API provided by GA
1. Test all authentication API routes with **cURL scripts**.
1. Use `js-template` to create a **prototype user interface** for sending form-based CRUD requests via the RESTful API to the server
1. **Generate scaffolding** on the Rails back end for Item resources
1. Update prototype front end to include form-based CRUD requests to the **[items API](https://github.com/pjliddy/snippet-list-api)**
1. Iterate and continuously improve to complete user stories for **user-based tasks**
1. Iterate and continuously improve to complete user stories for **item-based tasks**
1. Create and prioritize new user stories as feature improvements are identified
1. Leverage **Handlebars** and a **view controller** to manage the Single Page Applicaiton (SPA).
1. Limit the UI **standard Bootstrap** for presentation layer HTML, CSS, and JavaScript to maximize default interactivity, theming, and responsive behavior.
1. Leverage SASS to recompile a **custom Bootstrap theme** through use of SCSS variables files.
1. Limit the use of index.scss for **feature-specific CSS adjustments**.

### Separation of Concerns
This phased, iterative approach also allowed for a clear separation of concerns in the way code was organized, especially on the client side.
- The `auth` directory contains events, api, and ui JavaScript files for handling events, making api calls, and managing the results for user creation and authentication.
- The `items` directory contains events, api, and ui JavaScript files for handling events, making api calls, and managing the results for user creation and authentication.
- `view.js` manages the code to interact with auth & items and updates the presentation layer using jQuery & Handlebars templates

### 3rd Party APIs

This application leverages the following 3rd Party APIs and libraries:

- [Handlebars](http://handlebarsjs.com/) - Handlebars is used to create a modular system that is managed by a custom view controller.
- [Bootstrap](http://getbootstrap.com/) - Bootstrap was used in its default state for the prototype phase, then configured and recompiled at run time by adding a custom SCSS variables file, along with some minor changes to the core SCSS element generators. This approach to implementing Bootstrap has guaranteed a fully responsive site since the project began.
- [Masonry](https://masonry.desandro.com/)- Masonry is a JavaScript grid layout library that provides a dynamic, fluid,  multi-column layout for components of varying heights.
- [Google Fonts](https://fonts.google.com/) - The Roboto family from Google Fonts is used throughout the application.

## User Stories

### Authentication Stories
1. As an unregistered user, I want to register and create an account so I can use the application. **(Complete)**
1. As a registered user, I want to sign in so I can access my collection. **(Complete)**
1. As an authenticated user, I want to change my password. **(Complete)**

### Collection Stories
1. As an authenticated user, I want to be able to see the snippets in my collection. **(Complete)**
1. As an authenticated user, I want to add an snippet to my collection so I can refer to it later. **(Complete)**
1. As an authenticated user, I want to delete a snippet in my collection. **(Complete)**
1. As an authenticated user, I want to edit an item in my collection so that I can keep the content relevant. **(Complete)**

## Preliminary Wireframe
![Wireframe](https://s3.amazonaws.com/pliddy-ga/snippet-list/snippet-list.png)

This wireframe provided the framework for building out the key application functionality.


## Tables and Columns

### Users
| Column     | Type    |
|------------|---------|
| id         | INTEGER |
| first_name | STRING  |
| last_name  | STRING  |
| email      | STRING  |

### Items
| Column     | Type     |
|------------|-----------|
| id         | INTEGER   |
| title      | string    |
| body       | TEXT      |
| tag        | TEXT (v2) |
| user_id    | user.id   |


### Entity Relationship Diagram (ERD)

Users have a one to many relationship with Items

**Items** (many) >--+- **Users** (one)


## API Routing

The following routes make up the API for users and items.

[The repsoitory for the Items API can be found here](https://github.com/pjliddy/snippet-list-api)

### Users

| Verb   | URI                  | Controller#Action |
|--------|----------------------|-------------------|
| POST   | /sign-up             | users#signup      |
| POST   | /sign-in             | users#signin      |
| PATCH  | /change-password/:id | users#changepw    |
| DELETE | /sign-out/:id        | users#signout     |

### Items
| Verb   | URI        | Controller#Action |
|--------|------------|-------------------|
| GET    | /items     | items#index       |
| GET    | /items/:id | items#show        |
| POST   | /items     | items#create      |
| PATCH  | /items/:id | items#update      |
| DELETE | /items/:id | items#destroy     |

## Next Steps

The next steps for improvement of the product are:

1. Color **highlighting of code snippets** based on the appropriate language using a 3rd party library.
1. The addition of a **additional tables** for langauges and/or categories
1. More controlled **sorting and filtering** of the index of items, possibly using [Isotope](https://isotope.metafizzy.co/) to manage the UI
