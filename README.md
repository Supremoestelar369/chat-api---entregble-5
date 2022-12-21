### Deliverable-5 ACADEMLO
It is a chat api of which is the skeleton of users

> this project is a fork from https://github.com/SheykoWk/Node-skeleton

### Project Chat 
In this case you must start session to get a token generated by the API, which you must save and send in the header of your HTTP request to edit or delete users (Recommended to have 2 or more users)

### Base url: http://localhost:9000/api/v1

- /auth
    - /login -> Login with user credentials for authentication

- /conversations
    -post -> Create a new conversation 
         
    -get
       - /:conversation_id -> Show conversations of the logged in user.
       - /:conversaton_id/messages -> Show the messages of a conversation.
       - /:conversation_id/messages/:message_id -> Get message of a conversation by id.
    -patch
       - /:conversation_id -> If you are administrator you can edit this conversation.  
    
    -delete
       - /:conversation_id -> Delete my messages
       - /:conversation_id/messages/:message_id -> Delete message from a conversation by its id.

- /users
    -get 
       - /me -> Get my users.
       - /:id -> Get user by their id.
    -patch
       - /me -> Edit my user.
       - /:id -> Edit any user by id.
    -delete
       - /me -> Delete my user.
       - /:id -> Delete user by id.
