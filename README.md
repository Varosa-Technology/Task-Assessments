
1. Introduction:
   - This is a server side application that is capable of performing CRUD operations on User type using graphQL and mongodb.

2. Installation:
   - Clone or fork this repository into your machine. 
   - Install NodeJS in your system.
   - npm install 

3. Connecting database:
   - Copy and paste your mongodb database's connection string into env file.
   - If you are connectiing to a cloud hosted database make sure you register your device's ip addres (You will see abutton called "Add Curent IP Address" inside connect prompt.)

4. Run:
   - npm run start:dev

5. Features:
   - Open graphql playground
        -http://localhost:3000/graphql
   - Save user data using mutaion.
   - Retrive user data using query.

6. Exploring code base:
   - If you see inside input-type folder, there is a file that defines the structure of data that we can give input to our mutation and this where the input validation is also carried out.
   - If you see object-type folder, there is a file that defines the structue of data that we can output from our query.
   - If you see inside database folder, there is file that defines the structue of our mongodb documents.
   - If you see inside user.resolver.ts, there is methods decorated by mutation and query decorators. Those are the end points of our application.
      - Mutation is responsible for handling incoming data.
      - Query is responsible for serving requested data.

   - Al the database operations are done inside user.service.ts.
      - Mongoose modle is injected to access a document instance and perform database operations on it.

7. GraphQL Play Ground:


               mutation {
               creatUser(
                  createUser: {
                     fullName: ""
                     gender: ""
                     phoneNumber: ""
                     email: ""
                     address: ""
                     nationality: ""
                     dateOfBirth: "2023-09-09T14:30:00.000+00:00"
                     education: ""
                     preferedModeOfContact: "
                  }
               ) {
                  fullName
                  dateOfBirth
               }
               }

               query {
               getAllUsers {
                  id
                  fullName
                  gender
                  phoneNumber
                  email
                  address
                  nationality
                  dateOfBirth
                  education
                  preferedModeOfContact
               }
               }

               query {
               getUser(id: "") {
                  id
                  fullName
                  gender
               }
               }

               mutation {
               updateUser(
                  id: ""
                  updateUser: {
                     fullName: ""
                     gender: ""
                     phoneNumber: ""
                     email: ""
                     address: ""
                     nationality: ""
                     dateOfBirth: "2023-09-09T14:30:00.000+00:00"
                     education: ""
                     preferedModeOfContact: ""
                  }
               ) {
                  id
                  fullName
               }
               }

               mutation {
               deleteUser(id: "")
               }

   

