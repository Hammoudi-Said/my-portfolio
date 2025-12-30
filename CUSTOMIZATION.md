# 🎨 Customization Guide

This guide will help you customize the portfolio to match your personal brand and information.

## 📝 Quick Start Checklist

- [ ] Update personal information
- [ ] Modify contact details
- [ ] Add your experience
- [ ] Update projects
- [ ] Add certifications
- [ ] Customize colors
- [ ] Test locally
- [ ] Deploy to GitHub Pages

## 1️⃣ Update Personal Information

### Edit `js/i18n.js`

This file contains all text content in both French and English.

#### Update Your Name and Title

```javascript
// Line ~4 in both 'fr' and 'en' sections
nav: {
    name: "Your Name",  // Update here
    // ...
},
hero: {
    title: "Your Professional Title",  // Update here
    description: "Your professional summary...",  // Update here
}
```

#### Update Contact Information

```javascript
// In the 'contact' section of both 'fr' and 'en'
contact: {
    // Email displays in contact section
    // Update the actual email link in index.html (see below)
    location: {
        value: "Your City, Your Region"  // Update location
    }
}
```

### Edit `index.html`

Update actual contact links:

```html
<!-- Line ~470 - Email link -->
<a href="mailto:your.email@example.com" class="contact-card">
    <!-- ... -->
    <span class="contact-value">your.email@example.com</span>
</a>

<!-- Line ~481 - LinkedIn link -->
<a href="https://linkedin.com/in/your-profile" target="_blank" ...>
    <!-- ... -->
    <span class="contact-value">your-profile</span>
</a>

<!-- Line ~492 - GitHub link -->
<a href="https://github.com/your-username" target="_blank" ...>
    <!-- ... -->
    <span class="contact-value">your-username</span>
</a>
```

## 2️⃣ Update Professional Content

### Experience Section

In `js/i18n.js`, update the `experience` section:

```javascript
experience: {
    title: "Professional Experience",
    company1: {
        title: "Your Job Title",
        date: "Start Date - End Date",
        location: "City, Country",
        description: "Brief description of your role...",
        highlight1: "Achievement 1",
        highlight2: "Achievement 2",
        // Add more highlights as needed
    },
    company2: {
        // Second job...
    }
}
```

Then update the HTML in `index.html` if you need to add/remove companies.

### Projects Section

Update projects in `js/i18n.js`:

```javascript
projects: {
    project1: {
        title: "Project Name",
        type: "Project Type",
        description: "Detailed project description..."
    },
    // Add more projects
}
```

Update tech tags in `index.html`:

```html
<div class="project-tech">
    <span class="tech-tag">Technology 1</span>
    <span class="tech-tag">Technology 2</span>
    <!-- Add your tech stack -->
</div>
```

### Certifications

Update certifications in `js/i18n.js`:

```javascript
certifications: {
    cert1: {
        title: "Certification Name",
        issuer: "Issuing Organization",
        date: "Month Year"
    },
    // Add more certifications
}
```

## 3️⃣ Customize Colors & Branding

### Edit `css/style.css`

Change the color scheme by updating CSS variables:

```css
:root {
    /* Primary brand color - used for buttons, accents */
    --color-primary: #635BFF;        /* Change to your brand color */
    --color-primary-dark: #4F46E5;   /* Darker shade for hover */
    
    /* Secondary colors */
    --color-secondary: #00D4FF;      /* Accent color */
    --color-accent: #7C3AED;         /* Gradient accent */
    
    /* Cloud provider colors (optional to change) */
    --color-gcp: #4285F4;
    --color-aws: #FF9900;
    --color-terraform: #7B42BC;
    --color-azure: #0078D4;
}
```

### Popular Color Schemes

**Professional Blue** (Default):
```css
--color-primary: #635BFF;
--color-primary-dark: #4F46E5;
--color-accent: #7C3AED;
```

**Tech Green**:
```css
--color-primary: #10B981;
--color-primary-dark: #059669;
--color-accent: #34D399;
```

**Modern Purple**:
```css
--color-primary: #8B5CF6;
--color-primary-dark: #7C3AED;
--color-accent: #A78BFA;
```

**Professional Teal**:
```css
--color-primary: #14B8A6;
--color-primary-dark: #0D9488;
--color-accent: #2DD4BF;
```

## 4️⃣ Change Fonts

### Using Google Fonts

1. Choose fonts from [Google Fonts](https://fonts.google.com/)
2. Update the link in `index.html`:

```html
<!-- Replace line ~9 -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

3. Update CSS variable in `css/style.css`:

```css
:root {
    --font-primary: 'Your Font Name', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Recommended Font Combinations

- **Modern Tech**: Inter (default)
- **Clean Professional**: Source Sans Pro
- **Corporate**: Roboto
- **Friendly**: Open Sans
- **Elegant**: Poppins

## 5️⃣ Add Your Photo (Optional)

Add a profile photo to the hero section:

1. Add your image to a new `/app/images/` folder
2. In `index.html`, add before the hero content:

```html
<div class="hero-image">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

3. Add styles in `css/style.css`:

```css
.hero-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: var(--spacing-xl);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 6️⃣ Modify Sections

### Remove a Section

1. Delete or comment out the section in `index.html`
2. Remove the navigation link
3. Remove translations from `js/i18n.js`

### Add a Section

1. Copy an existing section structure in `index.html`
2. Add navigation link
3. Add translations in `js/i18n.js`
4. Add styles in `css/style.css` if needed

## 7️⃣ Update Stats in Hero

In `index.html`, update the hero stats:

```html
<div class="stat">
    <span class="stat-number">3+</span>  <!-- Change number -->
    <span class="stat-label" data-i18n="hero.stats.years">Years</span>
</div>
```

Update corresponding translations in `js/i18n.js`.

## 8️⃣ SEO Optimization

### Update Meta Tags

In `index.html`, update:

```html
<meta name="description" content="Your custom description here">
<meta name="keywords" content="Your, Keywords, Here">
<meta name="author" content="Your Name">
<title>Your Name | Your Title</title>
```

### Update Sitemap

In `sitemap.xml`, update:
- The base URL (replace Hammoudi-Said.github.io)
- Last modified dates
- Add/remove sections as needed

### Update Robots.txt

In `robots.txt`, update the sitemap URL.

## 9️⃣ Test Your Changes

### Test Locally

```bash
# Run the development server
./serve.sh

# Or manually
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

### Test Checklist

- [ ] All sections display correctly
- [ ] Language switcher works (FR ↔ EN)
- [ ] All links work
- [ ] Mobile responsive (use browser dev tools)
- [ ] Smooth scrolling works
- [ ] Animations trigger properly
- [ ] Contact links are correct
- [ ] No console errors (F12 → Console)

## 🔟 Advanced Customizations

### Add Social Media Icons

In the contact section of `index.html`, add:

```html
<a href="https://twitter.com/your-handle" target="_blank" class="contact-card">
    <svg class="contact-icon" viewBox="0 0 24 24">
        <!-- Twitter icon SVG -->
    </svg>
    <span class="contact-label">Twitter</span>
    <span class="contact-value">@your-handle</span>
</a>
```

### Add Blog Link

Add a new nav item:

```html
<a href="https://your-blog.com" target="_blank">Blog</a>
```

### Add Dark Mode

This would require significant CSS changes. Consider:
1. Adding a theme toggle button
2. Defining dark mode color variables
3. Using `prefers-color-scheme` media query

## 📱 Mobile Optimization

Already included, but you can adjust:

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

## 🎯 Tips for Best Results

1. **Keep it Simple**: Less is more in professional portfolios
2. **Be Specific**: Use concrete achievements and metrics
3. **Stay Current**: Update regularly with new skills and projects
4. **Test Everything**: Check all links and functionality
5. **Get Feedback**: Ask colleagues to review before publishing
6. **Mobile First**: Always test on mobile devices
7. **Fast Loading**: Optimize images and minimize code
8. **Clear CTAs**: Make it easy for visitors to contact you

## 🆘 Common Issues

### Styles Not Applying
- Check file paths are correct
- Clear browser cache (Ctrl+Shift+R)
- Check for CSS syntax errors

### Language Switching Not Working
- Verify JavaScript files are loaded
- Check browser console for errors
- Ensure data-i18n attributes match translation keys

### Links Not Working
- Use relative paths for internal files
- Use absolute URLs for external links
- Test all links after changes

## 📚 Resources

- [CSS Color Picker](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing

## 🎉 Done!

Once you're happy with your customizations:

1. Test thoroughly locally
2. Commit changes to Git
3. Push to GitHub
4. Deploy to GitHub Pages
5. Share your portfolio!

---

**Need help?** Open an issue or refer to the main README.md for more information.
