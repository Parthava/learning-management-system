# LMS with MERN stack and Redux
# Usage
---
## ES Modules in Node  
We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.  

## Env Variables  
Create a .env file in then root and add the following  
  NODE_ENV = development  
  PORT = 8000  
  MONGO_URI = your mongodb uri  
  JWT_SECRET = 'abc123'  

## Install Dependencies (frontend & backend)
  npm install  
  cd frontend  
  npm install  
  
## Run
  #### Run frontend (:3000) & backend (:8000)
  npm run dev

  #### Run backend only
  npm run server
