# A K M Rabby - Personal Portfolio Website

A modern, attractive, and creative personal portfolio website built with React. Showcasing professional experience, technical skills, projects, and achievements.

## 🚀 Features

- **Modern Design**: Sharp, attractive UI with creative touches
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful scroll animations and transitions
- **Interactive Components**: Engaging user interactions throughout
- **Dark Theme**: Professional dark theme with gradient accents
- **Performance Optimized**: Fast loading and smooth scrolling

## 🛠️ Technologies Used

- React 18
- CSS3 (Custom animations and gradients)
- React Icons
- Modern ES6+ JavaScript

## 📋 Prerequisites

Before installing, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

---

## 💻 Installation Guide

### 🪟 Windows Installation

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

### 🐧 Ubuntu Installation

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

## ✅ Verification

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

## 🏗️ Build for Production

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

## 📁 Project Structure

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

## 🎨 Sections

1. **Rabby**: Introduction with animated code window
2. **Skills**: Technical skills organized by category
3. **Experience**: Work experience timeline
4. **Projects**: Featured projects with expandable details
5. **Education**: Academic background
6. **Achievements**: Competitive programming achievements and stats

---

## 🚀 Deployment

The website can be deployed to various platforms:

- **Netlify**: Drag and drop the `build` folder or connect your Git repository
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **Any static hosting service**: Upload the contents of the `build` folder

---

## 🐛 Troubleshooting

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

**✅ Solution: Already Fixed in This Project**

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

## 📝 Customization

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

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

---

## 🔧 Development Tips

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

## 📧 Contact

- **Email**: rafy.ruet@gmail.com
- **Phone**: +8801521479231
- **LinkedIn**: [rafy13](https://linkedin.com/in/rafy13)
- **GitHub**: [rafy13](https://github.com/rafy13)

---

## 📄 License

This project is open source and available for personal use.

---

## 🙏 Acknowledgments

- Built with React and Create React App
- Icons provided by React Icons
- Fonts from Google Fonts (Inter & Playfair Display)

---

Built with ❤️ using React
