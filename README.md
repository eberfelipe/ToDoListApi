## ToDo List API Documentation

This document outlines the API for a simple ToDo List application.

### Technologies Used

* **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
* **Express:** A minimal and flexible Node.js web application framework.
* **date-fns:** A modern JavaScript date utility library.

### Data Storage

The application stores tasks and user data in a JSON file named `database.json`.

### API Endpoints

#### Tasks

##### Create Task

* **Method:** POST
* **Endpoint:** `/api/tasks`
* **Request Body:**
    * `title` (string): The task's title.
    * `description` (string): The task's description (optional).
    * `userId` (number): The ID of the user creating the task.
* **Response:**
    * **Success:** HTTP 201 (Created) with a message "Task successfully created!" and the new task data.
    * **Error:** HTTP 500 (Internal Server Error) with an error message "Error creating task".

##### List Tasks

* **Method:** GET
* **Endpoint:** `/api/tasks`
* **Query Parameters (Optional):**
    * `status` (string): Filter tasks by status ("pending" or "completed").
* **Response:**
    * **Success:** HTTP 200 (OK) with a JSON array of all or filtered tasks.
    * **Error:** HTTP 500 (Internal Server Error) with an error message "Error listing tasks".

##### Update Task

* **Method:** PUT
* **Endpoint:** `/api/tasks/:id`
* **Path Parameter:**
    * `:id` (number): The ID of the task to update.
* **Request Body (Optional):**
    * `title` (string): The updated title of the task.
    * `description` (string): The updated description of the task.
    * `status` (string): The updated status of the task ("pending" or "completed").
* **Response:**
    * **Success:** HTTP 200 (OK) with a message "Task successfully updated!" and the updated task data.
    * **Not Found:** HTTP 404 if the task with the provided ID is not found, with a message "Task not found".
    * **Error:** HTTP 500 (Internal Server Error) with an error message "Error updating task".

##### Delete Task

* **Method:** DELETE
* **Endpoint:** `/api/tasks/:id`
* **Path Parameter:**
    * `:id` (number): The ID of the task to delete.
* **Response:**
    * **Success:** HTTP 200 (OK) with a message "Task successfully deleted!".
    * **Not Found:** HTTP 404 if the task with the provided ID is not found, with a message "Task not found".
    * **Error:** HTTP 500 (Internal Server Error) with an error message "Error deleting task".

#### Task Object Properties

* `id` (number): The unique identifier of the task.
* `userId` (number): The ID of the user who created the task.
* `title` (string): The task's title.
* `description` (string): The task's description (optional).
* `status` (string): The task's status ("pending" or "completed").
* `creationDate` (string): The date and time when the task was created (format: DD/MM/YYYY HH:mm:ss).
* `completionDate` (string): The date and time when the task was completed (format: DD/MM/YYYY HH:mm:ss). Optional, only present for completed tasks.

### Error Handling

The API uses standard HTTP status codes to indicate the result of an API call. In case of errors, the response body will contain a JSON object with an error message and additional details, depending on the error.

### Running the API

1. Clone or download the project repository.
2. Install dependencies: `npm install`
3. Start the server: `node server.js`

### Using the API with Postman

1. Open Postman and create a new request.
2. Select the desired HTTP method (GET, POST, PUT, DELETE) and enter the API endpoint.
3. For POST, PUT, and DELETE requests, include the request body in JSON format.
4. If necessary, include query parameters in the URL.
5. Send the request and check the response.

### Next Steps

* **User Authentication:** Implement a user authentication system to allow users to register, log in, and manage their own tasks. This could involve storing user credentials securely and issuing tokens for authorized access.
* **Task Prioritization:** Add a field for task priority (e.g., "high," "medium," "low") and implement functionality to filter and sort tasks based on priority.
* **Due Dates:**  Extend the task object to include an optional `dueDate` property (string format: DD/MM/YYYY) and logic to display upcoming tasks or send reminders.
* **Categories or Tags:** Allow users to assign categories or tags to tasks for better organization. You could implement a separate endpoint for managing categories and associating them with tasks.
* **Collaboration:** Enable users to share tasks with others or collaborate on tasks in a group setting. This would require additional user management and access control features.
* **Frontend Integration:** Develop a user interface (UI) using a web framework like React or Angular to interact with the API. This would allow users to create, view, and manage tasks in a more user-friendly way.
* **Persistence:** Consider using a more robust database solution like MongoDB or PostgreSQL instead of a JSON file for long-term data storage and scalability.

### Additional Resources

* **Node.js Authentication with JWT:** [https://github.com/scotch-io/easy-node-authentication](https://github.com/scotch-io/easy-node-authentication)
* **React Tutorial:** [https://legacy.reactjs.org/docs/getting-started.html](https://legacy.reactjs.org/docs/getting-started.html)
* **Angular Tutorial:** [https://angular.io/tutorial](https://angular.io/tutorial)
* **MongoDB with Node.js:** [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)
* **PostgreSQL with Node.js:** [https://node-postgres.com/](https://node-postgres.com/)

These resources can provide a starting point for implementing these features and expanding the functionality of your ToDo List API. 