# Use the official Nginx image
FROM nginx:stable-alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files
COPY . /usr/share/nginx/html

# Expose port 8080 (Cloud Run expects 8080 inside container)
EXPOSE 8080

# Update Nginx to listen on port 8080 instead of 80
RUN sed -i 's/80;/8080;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]