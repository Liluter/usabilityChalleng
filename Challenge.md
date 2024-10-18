## Data

### Articles

GET https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments

POST https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments

### Tasks

1. Footer Component

```
Feature: Footer Component

Scenario: Display footer at the bottom of the page
Given I am on the main page
When the page is loaded
Then I should see the footer at the bottom of the page
And the footer should display the copyrights text
And the footer should have a link to "https://www.lowgular.io" 2. Articles List
Feature: Display Articles List
```

2. Articles List

```
Feature: Display Articles List

Scenario: Fetch and display a list of articles
Given I am on the main page
When the page is loaded
Then it should fetch articles from "https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments"
And the articles should be displayed in a list
```

```
Scenario: Display each article with title and content
Given I am on the main page
When an article is displayed
Then the article title should be shown in an "h2" element
And the article content should be shown in a "p" element 3. Show / Hide Picture
Feature: Show or Hide Article Image
```

3. Show / Hide Picture

```
Feature: Show or Hide Article Image

Scenario: Initially display "Show Image" button
Given I am on the main page
When the page is loaded
Then for each article the "Show Image" button should display

Scenario: Show image when "Show Image" button is clicked
Given I am on the main page
When I click the "Show Image" button
Then the article image should be shown in an "img" element
And the button label should change to "Hide Image"

Scenario: Hide image when "Hide Image" button is clicked
Given I am on the main page
and the image is currently shown
When I click the "Hide Image" button
Then the article image should be hidden
And the button label should change to "Show Image" 4. Create / Edit Article
Feature: Create or Edit an Article
```

4. Create / Edit Article

```
Scenario: Show form to create a new article
Given I am on the main page
When I click the "Add" button
Then the form should be displayed in create mode
And all show/hide buttons should be disabled
And the add article button should be disabled
And all edit article buttons should be disabled

Scenario: Submit form to create a new article
Given I am on the main page
And I have filled out the form to create a new article
When I submit the form
Then the data should be sent via POST to "https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments"
And the form panel should be hidden after a successful save

Scenario: Show form to edit an existing article
Given I am on the main page
When I click the "Edit" button for an article
Then the form should be displayed in edit mode
And all show/hide buttons should be disabled
And the add article button should be disabled
And all edit article buttons should be disabled

Scenario: Submit form to edit an article
Given I am on the main page
And I am in edit article mode
And I have filled out the form to edit an article
When I submit the form
Then the data should be sent via PUT to "https://636ce2d8ab4814f2b2712854.mockapi.io/articles-with-comments/:articleId"
And the form panel should be hidden after a successful save

Scenario: Preview Article in edit and create mode
Given I am on the main page
And I am in edit article mode or create article mode
When I type anything in the form
Then I should see preview article component
And component should look exactly the same like article item on the list
And all filled fields in the form should be displayed in the preview component
```

### Requirements

Use HttpClientModule to fetch data.
Use Bootstrap to style the elements.
Create components where you can to reuse some logic!

### Expected View

![alt text](image.png)

![alt text](image-1.png)

```

```
