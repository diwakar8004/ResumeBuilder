# Resume Builder

A modern, feature-rich resume builder application built with Next.js, React, and TypeScript. Create, customize, and export professional resumes in PDF format with an intuitive drag-and-drop interface.

## Features

- **Live Preview**: Real-time resume preview as you edit
- **PDF Export**: Download your resume as a professional PDF
- **Import from PDF**: Upload and parse existing resumes (beta)
- **Customizable Themes**: Choose from multiple resume color themes
- **Multiple Sections**: Easily add and manage work experience, education, skills, and projects
- **Responsive Design**: Works seamlessly on desktop and tablet
- **Rich Text Editing**: Format your content with rich text editing capabilities
- **State Persistence**: Your resume data is automatically saved locally
- **Multi-language Support**: Support for multiple font languages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/diwakar8004/ResumeBuilder.git
cd ResumeBuilder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests in watch mode
- `npm run test:ci` - Run tests in CI mode

## Tech Stack

- **Framework**: Next.js 13
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **PDF Generation**: React PDF Renderer
- **Testing**: Jest + React Testing Library

## Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── components/              # Reusable React components
│   │   ├── Resume/              # Resume display components
│   │   ├── ResumeForm/          # Form components for editing
│   │   └── ...                  # Other UI components
│   ├── home/                    # Landing page components
│   ├── lib/                     # Utility functions and helpers
│   │   ├── parse-resume-from-pdf/  # PDF parsing utilities
│   │   └── redux/               # Redux store configuration
│   ├── resume-builder/          # Resume builder page
│   └── resume-import/           # Resume import page
```

## Building for Production

```bash
npm run build
npm start
```

The application will be optimized and ready for deployment.

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Troubleshooting

### Resume Data Not Saving
- Check that your browser allows local storage
- Try clearing browser cache and reloading the page

### PDF Export Issues
- Ensure you have all required resume fields filled
- Try a different browser if issues persist

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Note**: This is a personal project fork maintained for individual use.
