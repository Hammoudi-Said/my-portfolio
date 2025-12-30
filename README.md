# 🌐 Cloud & Platform Engineer Portfolio

A professional, bilingual (🇫🇷 French / 🇬🇧 English) portfolio website for Cloud & Platform Engineers, built with clean, modern design inspired by Stripe, Vercel, and Doctolib.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

## ✨ Features

### 🎨 Design
- **Clean & Professional**: Minimalist design inspired by top tech companies
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in effects and scroll animations
- **Modern UI**: Gradient accents, clean typography, card-based layout

### 🌍 Internationalization
- **Bilingual Support**: Complete French and English translations
- **Language Switcher**: Easy toggle between languages in header
- **Persistent Selection**: Remembers user's language choice
- **SEO Optimized**: Proper lang attributes for search engines

### 📱 Sections

1. **Hero Section**
   - Professional tagline
   - Key statistics (experience, cloud providers, certifications)
   - Call-to-action buttons

2. **About**
   - Professional summary
   - Engineering values and mindset
   - Platform Engineering philosophy

3. **Skills & Stack**
   - Cloud Providers (GCP, AWS, Azure)
   - Platform Engineering tools (Terraform, IaC, Landing Zones)
   - DevOps & Tools (CI/CD, Docker, Kubernetes)
   - Development (Python, Golang, FastAPI)

4. **Experience**
   - Timeline view of professional experience
   - Detailed descriptions and achievements
   - Tech stack for each role

5. **Projects**
   - Terraform Provider development
   - Multi-region cloud platforms
   - Landing Zone management
   - Testing frameworks

6. **Certifications**
   - GCP Associate Cloud Engineer
   - Terraform Associate (003)
   - AWS Cloud Practitioner
   - Badge-style display

7. **Contact**
   - Email, LinkedIn, GitHub
   - Location information
   - Professional contact methods

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Hammoudi-Said/my-portfolio.git
cd my-portfolio
```

2. Open in browser:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Or simply open index.html in your browser
open index.html
```

3. View at: `http://localhost:8000`

### Deploy to GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete step-by-step instructions.

**Quick version:**
```bash
# Initialize and push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main

# Enable GitHub Pages in repository Settings → Pages
```

## 📁 Project Structure

```
my-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   ├── main.js            # Interactive features and animations
│   └── i18n.js            # Internationalization system
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment guide
└── LICENSE                # MIT License
```

## 🎨 Customization

### Update Personal Information

Edit `js/i18n.js` to update:
- Name and title
- Contact information (email, LinkedIn, GitHub)
- Professional summary
- Experience details
- Projects and achievements
- Certifications

### Change Colors

Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #635BFF;        /* Main brand color */
    --color-primary-dark: #4F46E5;   /* Hover states */
    --color-secondary: #00D4FF;      /* Accent color */
    --color-accent: #7C3AED;         /* Gradient accent */
}
```

### Modify Fonts

Update in `css/style.css`:
```css
:root {
    --font-primary: 'Inter', sans-serif;
}
```

And update the Google Fonts link in `index.html`.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for SEO
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Inter font family
- **SVG Icons**: Scalable vector graphics

## 📊 Performance

- ✅ **Fast Loading**: No heavy frameworks or libraries
- ✅ **Optimized CSS**: Minimal, efficient styles
- ✅ **Lazy Loading**: Animations triggered on scroll
- ✅ **Mobile First**: Responsive from the ground up
- ✅ **SEO Ready**: Proper meta tags and semantic HTML

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

### Experience Section
- Use action verbs (Developed, Implemented, Designed)
- Include metrics and achievements
- Highlight impact and results
- List relevant tech stack

### Projects Section
- Focus on technical challenges
- Explain architecture decisions
- Show business value
- Include tech stack tags

### Skills Section
- Group by category
- Highlight core competencies
- Use recognizable tool names
- Keep updated with latest tools

## 🔒 Security

- ✅ No sensitive data in code
- ✅ HTTPS by default (GitHub Pages)
- ✅ External links use `rel="noopener noreferrer"`
- ✅ No third-party tracking scripts

## 📈 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta description and keywords
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text ready for images
- ✅ Mobile responsive
- ✅ Fast loading times
- ✅ Clean URLs

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork for your own use
- Report bugs or issues
- Suggest improvements
- Share with others

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 👤 Author

**Said HAMMOUDI**
- Cloud & Platform Engineer
- 🌍 Based in Lens, Île-de-France
- 💼 [LinkedIn](https://linkedin.com/in/mohamed-said-hammoudi)
- 🐙 [GitHub](https://github.com/Hammoudi-Said)
- 📧 [Email](mailto:hammoudi.pro6@gmail.com)

## 🎯 Use Cases

Perfect for:
- ☁️ Cloud Engineers
- 🏗️ Platform Engineers
- 🔧 DevOps Engineers
- 🚀 Site Reliability Engineers
- 🏢 Infrastructure Engineers

## 💡 Inspiration

Design inspired by:
- [Stripe](https://stripe.com) - Clean, professional UI
- [Vercel](https://vercel.com) - Modern tech aesthetic
- [Doctolib](https://doctolib.fr) - Trustworthy, clear design
- [HashiCorp](https://hashicorp.com) - Platform engineering focus

## 🎓 Learning Resources

If you're building your own portfolio:
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [GitHub Pages Docs](https://docs.github.com/en/pages) - Hosting guide
- [Google Fonts](https://fonts.google.com/) - Free fonts
- [Simple Icons](https://simpleicons.org/) - Tech brand icons

## 📞 Support

Need help? Have questions?
- 📧 Email: hammoudi.pro6@gmail.com
- 🐛 Issues: Open an issue on GitHub
- 💬 Discussions: Start a discussion in the repository

---

⭐ If you found this useful, please consider giving it a star!

🚀 **Live Demo**: [https://Hammoudi-Said.github.io](https://Hammoudi-Said.github.io) (coming soon)

Built with ❤️ and ☕ by Said HAMMOUDI
