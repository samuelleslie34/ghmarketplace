# GH Local Store - Ghanaian E-commerce Web App

A simple, responsive e-commerce web application for Ghanaian local goods, built with HTML, CSS, and vanilla JavaScript.

## Features

### 🔐 Authentication System
- **Signup/Login/Logout** using localStorage
- **Two user roles**: Admin and User
- **Demo accounts**:
  - Admin: `admin@store.gh` / `admin123`
  - User: `user@store.gh` / `user123`

### 🛍️ Product Management (Admin Only)
- **Create, Read, Update, Delete** products
- Product fields: `id`, `name`, `price`, `imageURL`, `description`
- Inline editing with modal forms

### 🛒 Shopping Cart
- Add products to cart (stored in localStorage)
- Quantity management (increase/decrease)
- Remove items
- Checkout functionality
- Cart persists across sessions

### 💱 Live Currency Conversion
- **GHS to USD** conversion using [exchangerate.host](https://api.exchangerate.host/)
- Real-time exchange rates (cached for 1 hour)
- USD equivalent displayed for all prices

### 📱 Responsive Design
- **Bootstrap 5** integration
- Mobile-friendly layout
- Product grid adapts to screen size
- Clean, modern UI with dark theme

## File Structure

```
├── index.html      # Homepage with product listing and admin CRUD
├── login.html      # Authentication page (login/signup)
├── cart.html       # Shopping cart page
├── style.css       # Custom styling with Bootstrap 5 overrides
├── app.js          # Main application logic
└── README.md       # This file
```

## Quick Start

1. **Download** all files to a folder
2. **Open** `index.html` in a modern web browser
3. **Login** with demo accounts or create new ones
4. **Start shopping** or manage products (if admin)

## Local Development

- No build process required
- No dependencies to install
- Works with any local web server
- Test with Live Server (VS Code extension) for best experience

## Deployment

### Netlify (Recommended)
1. Drag and drop the project folder to [netlify.com](https://netlify.com)
2. Site deploys automatically
3. Custom domain available

### Other Platforms
- **GitHub Pages**: Push to repository, enable Pages
- **Vercel**: Connect GitHub repository
- **Any static hosting**: Upload files to web server

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Data Storage

- **localStorage** for all data persistence
- **No backend** required
- Data persists across browser sessions
- **Note**: Data is browser-specific

## API Integration

- **Exchange Rate API**: [exchangerate.host](https://api.exchangerate.host/)
- **Fallback rate**: 1 GHS = 0.08 USD (if API fails)
- **Caching**: 1 hour to reduce API calls

## Customization

### Adding New Products
1. Login as admin
2. Use "Add Product" form on homepage
3. Provide name, price (GHS), image URL, and description

### Styling Changes
- Modify `style.css` for custom themes
- Bootstrap 5 classes available for layout
- CSS variables for easy color changes

### Feature Extensions
- Add more product fields
- Implement search/filtering
- Add payment processing
- Include user reviews/ratings

## Troubleshooting

### Common Issues
- **Images not loading**: Check image URLs are accessible
- **Cart not working**: Ensure you're logged in
- **Admin features missing**: Login with admin account
- **Exchange rates not showing**: Check internet connection

### Reset Data
- Clear browser localStorage to reset all data
- Refresh page to reseed with demo data

## License

Built for educational purposes. Feel free to modify and use for your projects.

---

**Built with ❤️ for Ghanaian local goods**
