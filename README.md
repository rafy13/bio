# A K M Rabby - Personal Portfolio Website

A modern, attractive, and creative personal portfolio website built with React. Showcasing professional experience, technical skills, projects, and achievements.

## Features

- **Modern Design**: Sharp, attractive UI with creative touches
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful scroll animations and transitions
- **Interactive Components**: Engaging user interactions throughout
- **Dark Theme**: Professional dark theme with gradient accents
- **Performance Optimized**: Fast loading and smooth scrolling

## Technologies Used

- React 18
- CSS3 (Custom animations and gradients)
- React Icons
- Modern ES6+ JavaScript

## Prerequisites

Before installing, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

---

## Installation Guide

### Windows Installation

#### Step 1: Install Node.js

1. **Download Node.js:**
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for Windows
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - Accept the license agreement
   - Choose the default installation path (recommended)
   - **Important**: Check the box "Automatically install the necessary tools" if prompted
   - Click "Install" and wait for the installation to complete

3. **Verify Installation:**
   - Open **Command Prompt** (cmd) or **PowerShell**
   - Run the following commands:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., `v18.17.0` and `9.6.7`)

#### Step 2: Install Git (if not already installed)

1. **Download Git:**
   - Visit [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - Download the latest version for Windows

2. **Run the Installer:**
   - Double-click the downloaded file
   - Follow the installation wizard with default settings
   - Click "Next" through the installation steps

3. **Verify Installation:**
   ```bash
   git --version
   ```

#### Step 3: Clone or Navigate to the Project

**Option A: If you have the project files already:**
```bash
cd D:\projects\bio
```

**Option B: If cloning from a repository:**
```bash
git clone <repository-url>
cd bio
```

#### Step 4: Install Project Dependencies

1. **Open Command Prompt or PowerShell** in the project directory

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will install all required packages. It may take a few minutes.

3. **If you encounter permission errors**, run PowerShell as Administrator:
   - Right-click on PowerShell
   - Select "Run as Administrator"
   - Navigate to the project directory and run `npm install`

#### Step 5: Start the Development Server

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

**Note**: If the browser doesn't open automatically, manually navigate to `http://localhost:3000`

---

### Ubuntu Installation

#### Step 1: Update System Packages

Open Terminal (Ctrl+Alt+T) and run:

```bash
sudo apt update
sudo apt upgrade -y
```

#### Step 2: Install Node.js and npm

**Method 1: Using NodeSource Repository (Recommended for latest LTS version)**

1. **Install curl (if not already installed):**
   ```bash
   sudo apt install curl -y
   ```

2. **Add NodeSource repository:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   ```
   (Replace `18.x` with the latest LTS version if needed)

3. **Install Node.js:**
   ```bash
   sudo apt install -y nodejs
   ```

**Method 2: Using Ubuntu Repository (Simpler but may have older version)**

```bash
sudo apt install nodejs npm -y
```

4. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

#### Step 3: Install Git (if not already installed)

```bash
sudo apt install git -y
```

Verify installation:
```bash
git --version
```

#### Step 4: Clone or Navigate to the Project

**Option A: If you have the project files already:**
```bash
cd ~/projects/bio
# or
cd /path/to/bio
```

**Option B: If cloning from a repository:**
```bash
git clone <repository-url>
cd bio
```

#### Step 5: Install Project Dependencies

```bash
npm install
```

This will install all required packages. It may take a few minutes.

**Note**: If you encounter permission errors, you might need to fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### Step 6: Start the Development Server

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

**Note**: If the browser doesn't open automatically, manually navigate to `http://localhost:3000`

---

## Verification

After installation, verify everything is working:

1. **Check Node.js and npm:**
   ```bash
   node --version  # Should show v14.0.0 or higher
   npm --version   # Should show 6.0.0 or higher
   ```

2. **Check project dependencies:**
   ```bash
   npm list --depth=0
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
   You should see:
   - Compilation successful message
   - Browser opening automatically
   - Website displaying correctly

---

## Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized production files ready to deploy.

**For Windows:**
- The `build` folder will be created in your project directory
- You can deploy this folder to any static hosting service

**For Ubuntu:**
- Same process, the `build` folder will be in your project directory
- You can use `scp` or `rsync` to transfer to a server if needed

---

## Project Structure

```
bio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Rabby.js & Rabby.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Experience.js & Experience.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Education.js & Education.css
│   │   ├── Achievements.js & Achievements.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

---

## Sections

1. **Rabby**: Introduction with animated code window
2. **Skills**: Technical skills organized by category
3. **Experience**: Work experience timeline
4. **Projects**: Featured projects with expandable details
5. **Education**: Academic background
6. **Achievements**: Competitive programming achievements and stats

---

## Docker Deployment

This project includes Docker support for easy containerized deployment.

### Prerequisites

- Docker installed on your system
  - **Windows/Mac**: [Docker Desktop](https://www.docker.com/products/docker-desktop)
  - **Ubuntu**: See installation instructions below

### Installing Docker on Ubuntu

```bash
# Update package index
sudo apt update

# Install required packages
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y

# Add your user to the docker group (to run without sudo)
sudo usermod -aG docker ${USER}

# Apply the group changes (logout and login again, or run:)
newgrp docker

# Verify installation
docker --version
docker run hello-world
```

### Building the Docker Image

Navigate to the project directory and build the image:

```bash
# Build the image with a tag
docker build -t rabby-portfolio:latest .

# Or with a specific version
docker build -t rabby-portfolio:1.0.0 .
```

**Build Options:**

```bash
# Build without cache (force fresh build)
docker build --no-cache -t rabby-portfolio:latest .

# Build with custom build arguments
docker build --build-arg NODE_VERSION=18 -t rabby-portfolio:latest .
```

### Running the Docker Container

**Basic Run:**

```bash
# Run the container
docker run -d -p 80:80 --name rabby-portfolio-app rabby-portfolio:latest
```

**Run with Custom Port:**

```bash
# Run on port 8080 instead of 80
docker run -d -p 8080:80 --name rabby-portfolio-app rabby-portfolio:latest
```

**Run with Automatic Restart:**

```bash
# Container will restart automatically on system reboot
docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped rabby-portfolio:latest
```

### Accessing the Application

After running the container, access the application:

- **Local**: `http://localhost` (or `http://localhost:8080` if using custom port)
- **Network**: `http://YOUR_SERVER_IP` (replace with your server's IP address)

### Docker Commands Reference

**Container Management:**

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop the container
docker stop rabby-portfolio-app

# Start a stopped container
docker start rabby-portfolio-app

# Restart the container
docker restart rabby-portfolio-app

# Remove the container
docker rm rabby-portfolio-app

# Stop and remove in one command
docker rm -f rabby-portfolio-app

# View container logs
docker logs rabby-portfolio-app

# Follow container logs in real-time
docker logs -f rabby-portfolio-app

# Execute commands inside running container
docker exec -it rabby-portfolio-app sh
```

**Image Management:**

```bash
# List all images
docker images

# Remove an image
docker rmi rabby-portfolio:latest

# Remove unused images
docker image prune

# Remove all unused images, containers, networks
docker system prune -a
```

**Health Check:**

```bash
# Check container health status
docker inspect --format='{{.State.Health.Status}}' rabby-portfolio-app

# View health check logs
docker inspect --format='{{json .State.Health}}' rabby-portfolio-app | jq
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    container_name: rabby-portfolio-app
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
```

**Using Docker Compose:**

```bash
# Build and start
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build
```

### Production Deployment

**Deploy to Remote Server:**

```bash
# Save image to tar file
docker save rabby-portfolio:latest | gzip > rabby-portfolio.tar.gz

# Transfer to server (using scp)
scp rabby-portfolio.tar.gz user@your-server:/path/to/destination/

# On the server, load the image
gunzip -c rabby-portfolio.tar.gz | docker load

# Run the container on the server
docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped rabby-portfolio:latest
```

**Using Docker Registry:**

```bash
# Tag image for registry
docker tag rabby-portfolio:latest your-registry.com/rabby-portfolio:latest

# Push to registry
docker push your-registry.com/rabby-portfolio:latest

# On server, pull and run
docker pull your-registry.com/rabby-portfolio:latest
docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped your-registry.com/rabby-portfolio:latest
```

### Nginx Configuration

The Docker image includes a custom Nginx configuration (`nginx.conf`) that provides:

- **Gzip compression** for faster loading
- **Security headers** for enhanced security
- **Static asset caching** for better performance
- **React Router support** for client-side routing
- **Custom error pages**

To modify the Nginx configuration:

1. Edit `nginx.conf` in the project root
2. Uncomment the nginx.conf copy line in `Dockerfile`:
   ```dockerfile
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   ```
3. Rebuild the Docker image

### Troubleshooting Docker

**Port Already in Use:**

```bash
# Find process using port 80
sudo lsof -i :80
# or
sudo netstat -tulpn | grep :80

# Stop the process or use a different port
docker run -d -p 8080:80 --name rabby-portfolio-app rabby-portfolio:latest
```

**Permission Denied:**

```bash
# Add user to docker group
sudo usermod -aG docker ${USER}
newgrp docker

# Or run with sudo
sudo docker run -d -p 80:80 --name rabby-portfolio-app rabby-portfolio:latest
```

**Container Won't Start:**

```bash
# Check logs for errors
docker logs rabby-portfolio-app

# Check container details
docker inspect rabby-portfolio-app
```

**Out of Disk Space:**

```bash
# Clean up unused resources
docker system prune -a --volumes

# Remove specific containers and images
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
```

---

## AWS EC2 Deployment Guide

Deploy your portfolio to AWS EC2 t3.micro instance using Docker Hub.

### Prerequisites

- AWS Account
- SSH key pair (.pem file)
- Docker image pushed to Docker Hub

### Step 1: Launch EC2 Instance

1. Go to **AWS Console** → **EC2** → **Launch Instance**
2. Configure:
   - **Name**: `rabby-portfolio-server`
   - **AMI**: Amazon Linux 2023 (Recommended - lightweight & AWS-optimized)
   - **Instance Type**: t3.micro (1 vCPU, 1GB RAM - Free tier eligible)
   - **Key Pair**: Create or select existing (download .pem file)
   - **Security Group**:
     - SSH (22) - Your IP only
     - HTTP (80) - 0.0.0.0/0
     - HTTPS (443) - 0.0.0.0/0 (optional)
   - **Storage**: 8GB gp3 (default)
3. Click **Launch Instance**
4. Note your **Public IP address**

### Step 2: Connect to EC2 Instance

```bash
# Set correct permissions for your key
chmod 400 /path/to/your-key.pem

# Connect via SSH (note: user is 'ec2-user' for Amazon Linux)
ssh -i your-key.pem ec2-user@YOUR_EC2_IP
```

### Step 3: Install and Configure Docker

```bash
# Update system
sudo dnf update -y

# Install Docker
sudo dnf install -y docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker ec2-user

# Apply group changes
newgrp docker

# Verify Docker
docker --version
```

### Step 4: Deploy Application

```bash
# Pull and run your image
docker pull YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest

# Check status
docker ps
```

### Step 5: Access Your Application

Open your browser and navigate to:
```
http://YOUR_EC2_PUBLIC_IP
```

Your portfolio is now live!

### Updating Your Deployment

**For HTTP-only deployment:**

```bash
# SSH into your server
ssh -i your-key.pem ec2-user@YOUR_EC2_IP

# Pull latest image
docker pull YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest

# Stop and remove old container
docker stop rabby-portfolio-app
docker rm rabby-portfolio-app

# Run new container
docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest

# Clean up old images
docker image prune -f
```

**For HTTPS-enabled deployment (with SSL certificates):**

```bash
# SSH into your server
ssh -i your-key.pem ec2-user@YOUR_EC2_IP

# Pull latest image
docker pull YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest

# Stop and remove old container
docker stop rabby-portfolio-app
docker rm rabby-portfolio-app

# Run new container with SSL configuration
docker run -d \
  -p 80:80 \
  -p 443:443 \
  --name rabby-portfolio-app \
  --restart unless-stopped \
  -v ~/nginx-ssl/nginx-ssl.conf:/etc/nginx/conf.d/default.conf:ro \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest

# Clean up old images
docker image prune -f
```

### Optional: Create Update Script

Create a simple update script for easy deployments:

**For HTTP-only:**

```bash
# Create script
nano ~/update-portfolio.sh
```

Add this content:

```bash
#!/bin/bash
echo "Updating portfolio..."
docker pull YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
docker stop rabby-portfolio-app
docker rm rabby-portfolio-app
docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
docker image prune -f
echo "Portfolio updated successfully!"
```

**For HTTPS-enabled:**

```bash
# Create script
nano ~/update-portfolio-ssl.sh
```

Add this content:

```bash
#!/bin/bash
echo "Updating portfolio with SSL..."
docker pull YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
docker stop rabby-portfolio-app
docker rm rabby-portfolio-app
docker run -d \
  -p 80:80 \
  -p 443:443 \
  --name rabby-portfolio-app \
  --restart unless-stopped \
  -v ~/nginx-ssl/nginx-ssl.conf:/etc/nginx/conf.d/default.conf:ro \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
docker image prune -f
echo "Portfolio updated successfully with SSL!"
```

Make it executable:

```bash
chmod +x ~/update-portfolio.sh
# or for SSL version
chmod +x ~/update-portfolio-ssl.sh
```

Now update anytime with:

```bash
./update-portfolio.sh
# or for SSL version
./update-portfolio-ssl.sh
```

### Setting Up Domain Name with Route 53 Hosted Zone

If you have a Route 53 hosted zone in AWS:

#### Step 1: Add A Record in Route 53

1. Go to **AWS Console** → **Route 53** → **Hosted Zones**
2. Click on your hosted zone (e.g., `yourdomain.com`)
3. Click **Create Record**
4. Configure the record:
   - **Record name**: Leave empty for root domain (@) or enter subdomain (e.g., `portfolio`)
   - **Record type**: A - Routes traffic to an IPv4 address
   - **Value**: Enter your EC2 Public IP address
   - **TTL**: 300 seconds (5 minutes)
   - **Routing policy**: Simple routing
5. Click **Create records**

#### Step 2: Create WWW Subdomain (Optional)

To handle `www.yourdomain.com`:

**Option A: Another A Record**
1. Click **Create Record**
2. **Record name**: `www`
3. **Record type**: A
4. **Value**: Your EC2 Public IP
5. Click **Create records**

**Option B: CNAME to root domain** (preferred)
1. Click **Create Record**
2. **Record name**: `www`
3. **Record type**: CNAME
4. **Value**: `yourdomain.com`
5. Click **Create records**

#### Step 3: Verify DNS Propagation

```bash
# Check if DNS is working (from your local machine)
nslookup yourdomain.com
dig yourdomain.com

# Or use online tools
# https://dnschecker.org
```

DNS propagation typically takes 5-30 minutes but can take up to 48 hours.

Once propagated, access your site via:
```
http://yourdomain.com
```

---

## Enable HTTPS with SSL/TLS Certificate

Secure your application with free SSL certificates from Let's Encrypt.

### Prerequisites

- Domain name configured and pointing to your EC2 instance
- DNS fully propagated (verify with `nslookup yourdomain.com`)
- Security Group allows HTTPS (port 443)

### Method 1: Using Certbot with Nginx (Recommended)

This method uses Certbot to automatically obtain and configure SSL certificates.

#### Step 1: Update Security Group

Ensure your EC2 Security Group allows HTTPS:

1. Go to **EC2** → **Security Groups**
2. Select your instance's security group
3. Add inbound rule:
   - **Type**: HTTPS
   - **Port**: 443
   - **Source**: 0.0.0.0/0 (Anywhere IPv4)
4. Save rules

#### Step 2: Stop Docker Container Temporarily

```bash
# SSH into your EC2 instance
ssh -i your-key.pem ec2-user@YOUR_EC2_IP

# Stop the container to free port 80 (required for Certbot validation)
docker stop rabby-portfolio-app
```

#### Step 3: Install Certbot

```bash
# Install Certbot for Amazon Linux 2023
sudo dnf install -y certbot python3-certbot-nginx

# Or for Ubuntu (if using Ubuntu AMI)
# sudo apt update
# sudo apt install -y certbot python3-certbot-nginx
```

#### Step 4: Obtain SSL Certificate

```bash
# Get certificate for your domain(s)
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com

# Follow the prompts:
# - Enter your email address
# - Agree to terms of service
# - Choose whether to share email with EFF (optional)
```

The certificates will be saved in:
- Certificate: `/etc/letsencrypt/live/yourdomain.com/fullchain.pem`
- Private Key: `/etc/letsencrypt/live/yourdomain.com/privkey.pem`

#### Step 5: Create SSL-Enabled Nginx Configuration

Create a new nginx configuration file on your EC2 instance:

```bash
# Create nginx config directory in home
mkdir -p ~/nginx-ssl

# Create the SSL-enabled nginx config
nano ~/nginx-ssl/nginx-ssl.conf
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    # SSL Certificate files
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Root directory
    root /usr/share/nginx/html;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Important**: Replace `yourdomain.com` with your actual domain name.

#### Step 6: Run Docker Container with SSL

```bash
# Run container with SSL certificate volumes mounted
docker run -d \
  -p 80:80 \
  -p 443:443 \
  --name rabby-portfolio-app \
  --restart unless-stopped \
  -v ~/nginx-ssl/nginx-ssl.conf:/etc/nginx/conf.d/default.conf:ro \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest

# Verify container is running
docker ps

# Check logs
docker logs rabby-portfolio-app
```

#### Step 7: Test Your HTTPS Connection

```bash
# Test from command line
curl -I https://yourdomain.com

# Or open in browser
# https://yourdomain.com
```

Your site should now be accessible via HTTPS!

#### Step 8: Auto-Renewal Setup

SSL certificates expire after 90 days. Set up automatic renewal:

```bash
# Test renewal process (dry run)
sudo certbot renew --dry-run

# Create renewal script
sudo nano /usr/local/bin/renew-cert.sh
```

Add this content:

```bash
#!/bin/bash
# Stop container
docker stop rabby-portfolio-app

# Renew certificate
certbot renew --standalone

# Restart container
docker start rabby-portfolio-app

echo "Certificate renewed successfully!"
```

Make it executable:

```bash
sudo chmod +x /usr/local/bin/renew-cert.sh
```

Add to crontab for automatic renewal (runs twice daily):

```bash
# Edit crontab
sudo crontab -e

# Add this line (runs at 2am and 2pm daily)
0 2,14 * * * /usr/local/bin/renew-cert.sh
```

---

### Method 2: Using AWS Certificate Manager with Application Load Balancer

For production environments with higher traffic, consider using AWS Certificate Manager (ACM) with an Application Load Balancer:

#### Advantages:
- Free SSL certificates managed by AWS
- Automatic renewal (no manual intervention)
- Better scalability and load balancing
- Health checks and auto-scaling support

#### High-Level Steps:

1. **Request Certificate in ACM**:
   - Go to **AWS Certificate Manager** → **Request Certificate**
   - Enter your domain name (e.g., `yourdomain.com`, `*.yourdomain.com`)
   - Choose DNS validation
   - Add CNAME records to Route 53 (automatic if hosted zone is in same account)

2. **Create Application Load Balancer**:
   - Go to **EC2** → **Load Balancers** → **Create Load Balancer**
   - Choose **Application Load Balancer**
   - Add listener for HTTPS (port 443)
   - Select your ACM certificate
   - Create target group pointing to your EC2 instance (port 80)

3. **Update Route 53**:
   - Change A record to **Alias** record
   - Point to your Application Load Balancer

4. **Update Docker Command**:
   ```bash
   # No need for HTTPS on container, ALB handles it
   docker run -d -p 80:80 --name rabby-portfolio-app --restart unless-stopped YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
   ```

**Note**: Application Load Balancer costs approximately $16-20/month, which may not be cost-effective for a simple portfolio site on t3.micro free tier.

---

### Verification and Testing

Test your SSL configuration:

1. **SSL Labs Test**: https://www.ssllabs.com/ssltest/
2. **Browser Check**: Look for padlock icon in address bar
3. **Force HTTPS**: Ensure HTTP redirects to HTTPS
4. **Certificate Info**: Click padlock → View certificate details

### Troubleshooting HTTPS

**Certificate not found error:**
```bash
# Check if certificates exist
sudo ls -la /etc/letsencrypt/live/yourdomain.com/

# Verify permissions
sudo chmod 755 /etc/letsencrypt/live/
sudo chmod 755 /etc/letsencrypt/archive/
```

**Port 443 not accessible:**
```bash
# Check if container is listening on 443
docker port rabby-portfolio-app

# Check Security Group allows port 443
# Check if firewall is blocking
sudo iptables -L -n | grep 443
```

**Certificate expired:**
```bash
# Manually renew
sudo certbot renew

# Restart container
docker restart rabby-portfolio-app
```

**Nginx configuration error:**
```bash
# Test nginx config inside container
docker exec rabby-portfolio-app nginx -t

# View nginx error logs
docker logs rabby-portfolio-app
```

---

### Monitoring and Maintenance

```bash
# View container logs
docker logs -f rabby-portfolio-app

# Check container status
docker ps

# Check system resources
free -h    # Memory usage
df -h      # Disk usage

# Restart container
docker restart rabby-portfolio-app
```

### Cost Optimization

- **t3.micro**: Free tier eligible (750 hours/month for 12 months)
- **Storage**: 8GB is sufficient, only ~$0.80/month after free tier
- **Data Transfer**: 15GB free outbound/month
- **Stop when not needed**: Stops compute charges (storage charges continue)

### Troubleshooting

**Container not starting:**
```bash
docker logs rabby-portfolio-app
```

**Port 80 in use:**
```bash
sudo lsof -i :80
# Or use different port
docker run -d -p 8080:80 --name rabby-portfolio-app --restart unless-stopped YOUR_DOCKERHUB_USERNAME/rabby-portfolio:latest
```

**Cannot connect to EC2:**
- Check Security Group allows HTTP (port 80) from 0.0.0.0/0
- Check Security Group allows SSH (port 22) from your IP
- Verify instance is running

**Docker permission denied:**
```bash
sudo usermod -aG docker ec2-user
newgrp docker
```

---

## Deployment (Other Platforms)

The website can also be deployed to various platforms:

- **Netlify**: Drag and drop the `build` folder or connect your Git repository
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **Any static hosting service**: Upload the contents of the `build` folder

---

## Troubleshooting

### Common Issues

#### Port 3000 Already in Use

**Windows:**
```bash
# Find and kill the process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Ubuntu:**
```bash
# Find and kill the process using port 3000
sudo lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm start
```

#### npm install Fails

**Clear npm cache:**
```bash
npm cache clean --force
```

**Delete node_modules and package-lock.json, then reinstall:**
```bash
# Windows
rmdir /s /q node_modules
del package-lock.json
npm install

# Ubuntu
rm -rf node_modules package-lock.json
npm install
```

#### Permission Denied Errors (Ubuntu)

```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

#### Module Not Found Errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules  # Ubuntu
rmdir /s /q node_modules  # Windows
npm install
```

#### React Scripts Not Found

```bash
npm install react-scripts --save
```

#### Browser Doesn't Open Automatically

Manually navigate to `http://localhost:3000` in your browser.

#### SecurityError: Cannot initialize local storage (Node.js 20+)

If you're using Node.js 20 or higher, you may encounter this error:
```
SecurityError: Cannot initialize local storage without a `--localstorage-file` path
```

**Solution: Already Fixed in This Project**

The project has been configured to handle this automatically:
- A `scratch/` directory is created for localStorage storage
- The `package.json` scripts include the `--localstorage-file` flag
- This works with Node.js 20, 21, 22, 23, 24, 25, and future versions

**If you still encounter the error:**

1. **Make sure the scratch directory exists:**
   ```bash
   # Windows
   mkdir scratch
   
   # Ubuntu/Linux
   mkdir -p scratch
   ```

2. **Reinstall dependencies:**
   ```bash
   npm install
   ```

3. **Alternative: Use Node.js 18 LTS (if issues persist)**
   - Download and install Node.js 18 LTS from [nodejs.org](https://nodejs.org/)
   - This version is fully compatible with react-scripts and doesn't require the workaround

**Manual workaround (if needed):**
```bash
# Windows (PowerShell)
$env:NODE_OPTIONS="--localstorage-file=./scratch/localstorage.json"; npm start

# Ubuntu/Linux
NODE_OPTIONS=--localstorage-file=./scratch/localstorage.json npm start
```

---

## Customization

To customize the content, edit the respective component files in `src/components/`:

- **Personal Information**: Update `Rabby.js`
- **Skills**: Modify `Skills.js`
- **Work Experience**: Update `Experience.js`
- **Projects**: Edit `Projects.js`
- **Education**: Update `Education.js`
- **Achievements**: Modify `Achievements.js`
- **Contact Info**: Update `Footer.js` and `Header.js`

### Changing Colors and Styles

Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... other variables */
}
```

---

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

---

## Development Tips

### Hot Reload
The development server automatically reloads when you make changes to the code.

### Browser Developer Tools
- Press `F12` to open developer tools
- Use React Developer Tools extension for better debugging

### Code Formatting
Consider using Prettier for consistent code formatting:
```bash
npm install --save-dev prettier
```

---

## Contact

- **Email**: rafy.ruet@gmail.com
- **Phone**: +8801521479231
- **LinkedIn**: [rafy13](https://linkedin.com/in/rafy13)
- **GitHub**: [rafy13](https://github.com/rafy13)

---

## License

This project is open source and available for personal use.

---

## Acknowledgments

- Built with React and Create React App
- Icons provided by React Icons
- Fonts from Google Fonts (Inter & Playfair Display)

---

Built with love using React
