# BackEnd React BLOG
## MySQL
### db.sql 

## NodeJs + TypeScript
```
mkdir backend
cd backend/
node -v , npm –v  
tsc -v
npm init --yes
//sau npm init –y  =>package.js
```
### In fisierul tsconfig.json
```
"compilerOptions": { 
	"outDir": ”./dist" 
}
```
### Instalam modulele necesare
```
npm install express dotenv cors body-parser mysql2 
npm i -D typescript @types/express @types/node
//npm install --dev typescript @types/express @types/node
npm install --save-dev  @types/body-parser @types/mysql @types/dotenv
npm install --save-dev  @types/cors
npm i --save bcryptjs

npm i --save  @types/bcryptjs
npm i --save jsonwebtoken
npm i --save @types/jsonwebtoken
npm i --save express-session 
npm i --save @types/express-session 
npm  i --save express-validator
npm i --save @types/express-fileupload 

npx tsc --init //=> tsconfig.json
npm i -D concurrently nodemon
//npm install --dev concurrently nodemon
```
### .env
```
PORT=3002
DB_HOST="localhost"
DB_USER="root"
DB_PWD=""
DB_NAME="reactblog"

SECRET_KEY= "reactblog-secret-key"
```


### Facem folderele necesare
```
models
routes
types
```
### Facem fisierul: server.ts 
### Modificam fisieul package.json
```
"scripts": { 
	"build": "npx tsc", 
	"start": "node dist/server.js", 
	"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/server.js\"" 
}

npm run dev
npm run build
npm run start
```

# Back-End+MySql
### db.ts conexiunea la baza de date
```
import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});
```
4. db.ts
5. types/User.ts types/Post.ts types/Comment.ts types/Category.ts 
6. models/user.ts models/post.ts models/comment.ts models/category.ts
7. routes/userRouter.ts routes/postRouter.ts
8. Modificam fisierul server.ts
9. npm run dev
10. http://localhost:3002/users

# Frontend React BLOG
```
npm i create-react-app -g 
npm view react version
```
```
mkdir reactBlog
cd reactBlog
create-react-app frontend
sau
npx create-react-app frontend
cd frontend
npm start
```
### Instalam modulele necesare
```
npm i --save react-bootstrap@next bootstrap@5.3 react-router-dom axios formik yup date-fns
npm i --save env-cmd
npm i --save-dev @babel/plugin-proposal-private-property-in-object

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
 // pt editor rich-text
npm i react-quill
```
### Facem un folder components si adaugam componentele
```
Layout.jsx
NavBar.jsx
Header.jsx
Footer.jsx
```
### Facem un folder pages si adaugam componentele
```
Home.jsx
Login.jsx
Register.jsx
Posts.jsx
SinglePost.jsx
NoPage.jsx
```
### In App.js adaugam rutele
```
<BrowserRouter>
    <Routes>
        <Route  element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:id" element={<SinglePost />} />
            <Route path="mylogin" element={<Login />} />
            <Route path="myregister" element={<Register />} />
            
            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
</BrowserRouter>
```
### facem context/authContext.jsx si modificam index.js
```
import { AuthContexProvider } from './context/authContext';
<AuthContexProvider>
    <App />
</AuthContexProvider>

```




