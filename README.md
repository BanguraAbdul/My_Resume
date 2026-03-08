# Abdul Bangura - Professional Resume

A modern, responsive resume application built with Angular 17. Features a professional two-column layout with PDF download functionality.

## Features

- Professional navy blue design with clean typography
- Fully responsive (desktop, tablet, mobile)
- PDF download via print dialog
- Optimized for 2-page A4 format
- Print-friendly with proper margins and page breaks

## Technologies

- Angular 17 (Standalone Components)
- TypeScript
- CSS3 with custom properties
- Font Awesome icons
- Google Fonts (Inter & Playfair Display)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
```

The build output will be in `dist/my-resume/`

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will build and automatically deploy to GitHub Pages. Your site will be live at `https://banguraabdul.github.io/My_Resume/` in 1-2 minutes.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Main component with resume data
│   ├── app.component.html    # Resume template
│   └── app.component.css     # Styles and print layout
├── assets/                   # Images and static files
├── index.html               # Main HTML file
└── styles.css               # Global styles
```

## Customization

To customize the resume with your own information, edit the `profile` object in `src/app/app.component.ts`.

## Author

Abdul Bangura
- Email: abdulbangura023@gmail.com
- GitHub: https://github.com/BanguraAbdul

## License

This project is open source and available for personal use.
