# FROM node:20.17.0
# ENV NODE_ENV=production
# WORKDIR /the/workdir/path
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# CMD [ "npm", "start" ]
# EXPOSE 3200



# Use the official Node.js image as a base
FROM node:20.17.0

# Set the working directory inside the container
WORKDIR /usr/src/dummyproject

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
