# 14 Model-View-Controller (MVC): Tech_Blog

## User Story

```md
AS A developer who writes about tech
The user WANT a CMS-style blog site
SO THAT he/she can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN a user visits the site for the first time
THEN he/she is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN the user clicks on the homepage option
THEN he/she is taken to the homepage
WHEN the user clicks on any other links in the navigation
THEN he/she is prompted to either sign up or sign in
WHEN the user chooses to sign up
THEN he/she prompted to create a username and password
WHEN the user clicks on the sign-up button
THEN the user credentials are saved and the user is logged into the site
WHEN the user revisits the site at a later time and choose to sign in
THEN he/she is prompted to enter my username and password
WHEN the user is signed in to the site
THEN he/she sees navigation links for the homepage, the dashboard, and the option to log out
WHEN the user clicks on the homepage option in the navigation
THEN the user is taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN the user clicks on an existing blog post
THEN he/she is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN the visitor enters a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN the visitor clicks on the dashboard option in the navigation
THEN the user is taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN the user clicks on the button to add a new blog post
THEN he/she is prompted to enter both a title and contents for my blog post
WHEN the user clicks on the button to create a new blog post
THEN the title and contents of user's post are saved and the user is taken back to an updated dashboard with my new blog post
WHEN the user clicks on one of my existing posts in the dashboard
THEN he/she is able to delete or update my post and taken back to an updated dashboard
WHEN the user clicks on the logout option in the navigation
THEN he/she is signed out of the site
WHEN the visitor is idle on the page for more than a set time
THEN he/she is automatically signed out of the site 
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 



## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application : https://mysterious-plains-69110.herokuapp.com/

* The URL of the GitHub repository : https://github.com/zahid267/Tech_Blog

---
© Developed by Muhammad Zahid - June 11, 2021.