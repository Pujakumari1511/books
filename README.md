[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Pujakumari1511_books&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Pujakumari1511_books)

# Books MVP

Your task is to address all issues listed below.  
Fork this project and solve the tickets one by one by creating a branch for each ticket, implementing the solution, and merging it into the main branch. **Keep each branch after merging.**

### 1. **Ticket #101 - Enhance code documentation**

- **User Story**:  
  As a developer, I want detailed comments for each function to better understand the codebase and maintain it efficiently.
- **Task**:  
  Add descriptive comments to all functions across the codebase to improve readability and facilitate easier maintenance.

### 2. **Ticket #102 - Refactor `Books.jsx` to use a custom hook**

- **User Story**:  
  As a developer, I want to use the `useAxios` custom hook in `Books.jsx` to streamline HTTP requests and ensure consistency in data fetching.
- **Task**:  
  Replace the current `axios.get` calls in `Books.jsx` with the `useAxios` custom hook without changing the existing functionality.

### 3. **Ticket #103 - Add search functionality to `Books.jsx`**

- **User Story**:  
  As a user, I want to search for books by title, author, or genre, so I can easily find specific books.
- **Task**:  
  Add a search feature to `Books.jsx` that filters books based on the user's input.

### 4. **Ticket #104 - Fix `Rating` component mouseover in `AddBook.jsx`**

- **User Story**:  
  As a user, I want to see the rating value clearly when hovering over stars to understand the selected value.
- **Task**:  
  Update the `Rating` component in `AddBook.jsx` to ensure the mouseover behavior works correctly and displays the rating value clearly.

### 5. **Ticket #105 - Adjust message display timing in `AddBook.jsx`**

- **User Story**:  
  As a user, I want success or error messages to display long enough for me to understand the outcome of my actions.
- **Task**:  
  Modify `AddBook.jsx` to ensure that success or error messages are displayed for the full 5000 milliseconds as specified in the `useAxios` hook.

### 6. **Ticket #106 - Fix post method in `AddBook.jsx`**

- **User Story**:  
  As a user, I want to add new books and see them listed.
- **Task**:  
  Update `AddBook.jsx` to ensure books are successfully posted and appear in the book list.

### 7. **Ticket #107 - Implement an image URL fallback**

- **User Story**:  
  As a user, I want a default image to display for books without an image URL, keeping the interface consistent and visually appealing.
- **Task**:  
  Add a fallback mechanism in `AddBook.jsx` to display a default image when no image URL is provided.

### 8. **Ticket #108 - Develop `SinglePage` Component**

- **8.1. Route and Navigation Links**

  - **User Story**:  
    As a user, I want to navigate to a detailed page for each book to view more information.
  - **Task**:  
    Set up a new route and navigation links for the `SinglePage` component.

- **8.2. Consistent Styling**
  - **User Story**:  
    As a user, I want the `SinglePage` component to match the style of the rest of the application for a seamless experience.
  - **Task**:  
    Use Material-UI to style the `SinglePage` component, ensuring it aligns with the application's existing design.

### 9. **Ticket #109 - Add `Delete` Button to `SinglePage` Component**
