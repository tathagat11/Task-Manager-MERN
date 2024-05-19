# Project Overview
## Application
This project aims to create a task manager web application that provides a user-friendly and motivating experience for individuals to effectively manage their tasks and stay organized. The application has user authentication, allowing users to securely access their personalized task lists. Users will have the ability to add new tasks, update their status (e.g., backlog, to do, doing, or done), and delete tasks as needed.
A key feature of the application will be a dashboard that provides an overview of the user's tasks, categorized by their respective statuses. This dashboard will enable users to quickly see how many tasks they have pending and quickly see if there are any high priority tasks at the moment.
To project a positive and motivating feeling, the user interface (UI) is designed with this in mind specifically, using elements that promote productivity and a feeling of calm that will avoid making the user feel overwhelmed looking at the work on their hands. Color schemes, typography, and visual elements like the background image are carefully selected to create a calming and engaging experience for users.
The application is built using modern web technologies, ensuring cross-platform compatibility across various devices. Particular emphasis is placed on usability, performance, and implementing security  techniques to provide a simple and secure experience for users.
Overall, this task manager web application aims to streamline task management processes, enhance productivity, and create a positive mindset among users by combining functional features with an aesthetically pleasing and motivating user interface.
## CI/CD implementation
The project follows DevOps practices, including Continuous Integration/Continuous Deployment (CI/CD), to streamline development and operations processes. Key benefits and features include:
- Improved collaboration between development and operations teams.
- Increased automation for build, testing, and deployment processes.
- Faster delivery of new features and updates to users.
- Higher quality software through continuous testing and monitoring.
- Automated build and testing with every code change (Continuous Integration).
- Automated deployment to staging or production environments after successful testing (Continuous Deployment).
- Infrastructure provisioning and management through code (Infrastructure as Code).
- Consistent and portable deployments using containerization (e.g., Docker).
## Tools User for Devops Pipeline
- Source Code Management - Git
- Code Hosting - Github
- Containerization - Docker
- Continuous Integration - Jenkins
- Continuous Deployment - Ansible
- Remote Testing - ngrok
## Installations:
- Make sure all packages installed in the system are up to date.
```sudo apt update```
- Install curl and gnupg2.
```apt-get install curl gnupg2 -y```
- Install Node.js version manager.
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash```
- Install Node.js’ latest LTS version (20)
```nvm install 20```
- Verify installation, it should show the version of node. Now npm commands can be used.
```node -v```, then
```npm -v```
- For the server, create the directory and go ahead.
### For the client:
- Install Vite.
```npm install -g vite```
- Create a client template.
```npm create vite@latest client -- --template react```
- Concurrently is used to run the client and server at the same time in the initial development phase.
```npm i concurrently```
- Add this to scripts in root directory: ```"start": "concurrently \"nodemon server/app.js\" \"npm run client\""```
- Run the client and server. Vite projects start by default on port ```5173```.
```npm start```

### Database (MongoDB):
- Import the MongoDB public GPG key.
```curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \```
   ```sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \```
   ```--dearmor```
- Create the list file /etc/apt/sources.list.d/mongodb-org-7.0.list
```echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list```
- Install MongoDB.
```sudo apt-get install -y mongodb-org```
- Run MongoDB.
```sudo systemctl start mongod```
- Verify MongoDB is running.
```sudo systemctl status mongod```


*Note: This project uses packages separately installed in server, client and root. Make sure to install all packages in appropriate directories. <br />
The CICD implementation and installations will be described in the documentation (it will be linked here shortly).
