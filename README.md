# Snippet List

## Project Idea

My project idea is a code snippet collector. The concept is simple. Each item in the collection has a title and open text field to hold a code sample.

All developers have huge collections of bookmarks to articles, documentation, samples, etc. What I have find myself looking for most often is an example of how to do something. These solutions often get lost in the clutter of all the other related bookmarks managed by the browser.

## User Stories

#### Authentication Stories
1. As an unregistered user, I want to register and create an account so I can use the application.
1. As a registered user, I want to sign in so I can access my collection.
1. As an authenticated user, I want to change my password.

#### Collection Stories
1. As an authenticated user, I want to add an snippet to my collection so I can refer to it later.
1. As an authenticated user, I want to delete a snippet in my collection.
1. As an authenticated user, I want to edit an item in my collection

#### Backlog
1. As an authenticated user, I want to add a tag to one of my snippets.
1. As an authenticated user, I want to filter my collection by tag.

## Tables and Columns

#### Users
| Column     | Type    |
|------------|---------|
| id         | INTEGER |
| first_name | TEXT    |
| last_name  | TEXT    |
| email      | TEXT    |

#### Items
| Column     | Type     |
|------------|-----------|
| id         | INTEGER   |
| title      | TEXT      |
| snippet    | TEXT      |
| tag        | TEXT (v2) |
| user_id    | user.id   |


## Entity Relationship Diagram (ERD)

These are the diagrams that show how your tables are related to one another.

**Items** (many) >--+- **Users** (one)


## Routing

What routes will you need to be able to make the proper request to your API?

#### Users

| Verb   | URI                  | Controller#Action |
|--------|----------------------|-------------------|
| POST   | /sign-up             | users#signup      |
| POST   | /sign-in             | users#signin      |
| PATCH  | /change-password/:id | users#changepw    |
| DELETE | /sign-out/:id        | users#signout     |

#### Items
| Verb   | URI        | Controller#Action |
|--------|------------|-------------------|
| GET    | /items     | items#index       |
| GET    | /items/:id | items#show        |
| POST   | /items     | items#create      |
| PATCH  | /items/:id | items#update      |
| DELETE | /items/:id | items#destroy     |


## 3rd Party APIs

I don't plan on using any 3rd party APIs at this time. One optional choice for a bonus feature would be to leverage the Google URL shortener API to allow for saviing links in a shareable format as part of the snippet.

## Wireframe
![Wireframe](https://s3.amazonaws.com/pliddy-ga/snippet-list/snippet-list.png)


## Timetable

| Day 0             | Day 1      | Day 2      | Day 3         | Day 4 | Day 5              |
|-------------------|------------|------------|---------------|-------|--------------------|
| <li>Local Env<li>Git Repos<li>GitHub & GitPages<li>Heroku | Server API | Client API | List Features | UX    | Final Presentation |
