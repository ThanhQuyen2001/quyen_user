
# Use the official Node.js image as base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY app/package.json /app/


# Install dependencies
RUN npm install

# Copy the rest of the code to the container
COPY . .

# Build the application
RUN npm run build

# Set environment variables
ENV HOST 0.0.0.0
ENV PORT 3000

# Start the application
CMD [ "npm", "start" ]
