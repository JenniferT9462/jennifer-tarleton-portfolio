# Jennifer Tarleton Portfolio

## Overview
This is my personal portfolio website showcasing my work, skills, and achievements as a full-stack developer. It serves as a hub for potential employers, collaborators, and visitors to learn more about me, view my projects, and get in touch.

## Features
- **Projects Section**: Highlights my best work with links to live demos and source code.
- **About Me Section**: Provides insight into my background, skills, and interests.
- **Contact Form**: Allows visitors to reach out directly via email.
- **Social Media Links**: Connects to my professional social media profiles.
- **Blog/Posts Section**: Shares updates, learning experiences, and personal achievements.
- **Interactive Elements**: Smooth animations and engaging user experience.

## Technologies Used
- **Frontend**: React.js, Next.js
- **Styling**: Tailwind CSS, Daisy UI
- **Email Service**: [emailjs-com](https://www.emailjs.com) for the contact form

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser at `http://localhost:3000`.

## Deployment
The portfolio website was deployed on Vercel. Ensure all environment variables are correctly set in the deployment platform.
**Deployed Site:** <https://jennifer-tarleton-portfolio.vercel.app/>

## Folder Structure
```
portfolio-website/
|-- public/          # Static assets
|-- src/
    |-- components/  # Reusable UI      components
    |-- app/ 
        blog/[id] 
        page.js      # Next.js pages
    |-- styles/      # Tailwind CSS and global styles
    |-- data/        # Utility functions
|-- .env             # Environment variables
|-- package.json     # Project metadata and dependencies
```

## Usage
- Explore my projects and learn about my skills.
- Use the contact form to get in touch with me.
- Read my blog posts to see what I’ve been learning and building.

## License
This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements
- Inspired by various portfolio designs and ideas from the developer community.
- Special thanks to the creators of React, Next.js, Tailwind CSS, and Daisy UI.

---

For questions, feel free to reach out via the contact form or email me directly!

