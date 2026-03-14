# Pin-to-Site Pro

Transform a business location into a premium, fully-responsive website in seconds. Generate professional landing pages for local businesses with customizable designs, color palettes, and media.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

### Phase 1 (Current) ✅
- **📱 Responsive Device Preview** – Switch between mobile, tablet, and desktop layouts in real-time
- **🎨 6-Color Accent System** – Blue, green, purple, orange, red, teal palette selection
- **📸 Image Upload** – Upload hero image and gallery (up to 3 images) with instant preview
- **🎯 6 Business Categories** – Restaurant, dentist, hospital, salon, repair shop, and generic services
- **🎭 3 Design Tones** – Premium, friendly, and modern typography & color combinations
- **4 Gradient Presets** – Aurora, sunset, ocean, forest background themes
- **🌗 Dark/Light Mode** – Automatic stylesheet switching for accessibility
- **⚡ Live Preview** – iframe-based real-time HTML generation (no backend required)
- **📋 Copy/Download** – Export generated HTML as file or copy to clipboard

### Future Phases
- **Phase 2** – AI copywriting, save/load templates
- **Phase 3** – Business analytics dashboard, template library
- **Phase 4** – Payment integration, team collaboration features

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pin-to-site-pro.git
cd pin-to-site-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 📖 Usage Guide

### 1. **Enter Business Location**
   - Paste a Google Maps URL, or
   - Type business name + city (e.g., "Joe's Pizza, Brooklyn")

### 2. **Configure Design**
   - Select **Category** (restaurant, dentist, etc.)
   - Choose **Tone** (premium, friendly, modern)
   - Pick **Style Variant** (studio, bold, minimal)
   - Select **Gradient Preset** (aurora, sunset, ocean, forest)

### 3. **Customize Appearance** (Phase 1)
   - Toggle **Dark/Light Mode**
   - Choose **Color Palette** from 6 accent colors
   - Upload **Hero Image** (displayed at top)
   - Add **Gallery Images** (up to 3, shown in portfolio section)

### 4. **Preview & Export**
   - Switch between **mobile/tablet/desktop** views
   - Copy generated HTML to clipboard
   - Download as `.html` file to send to clients

---

## 🏗️ Architecture

### Tech Stack
- **Framework** – Next.js 16.1 with React 19 (App Router)
- **Styling** – Tailwind CSS 4 + inline CSS generation
- **State Management** – React hooks (useState, useMemo, useEffect)
- **Build Tool** – Next.js Turbopack (~1s compilation)
- **Image Handling** – Base64 encoding for client-side processing

### Code Structure
```
src/app/
├── page.js          # Main React component (2,400+ lines)
│   ├── CATEGORY_CONTENT      # 6 preset business profiles
│   ├── TONE_THEME            # 3 design themes
│   ├── GRADIENT_PRESETS       # 4 background gradients
│   ├── COLOR_PALETTES         # 6 accent colors (Phase 1)
│   ├── buildGeneratedHtml()   # HTML generation engine
│   ├── parsePlace()           # Google Maps URL parser
│   └── UI Controls            # React component (device preview, color picker, uploads)
├── layout.js        # Root HTML document
└── globals.css      # Control panel styling

FEATURES.md         # Feature roadmap (4-phase plan)
```

### How It Works
1. **Input Parsing** – Extract business info from Google Maps URLs or text
2. **Template Rendering** – Apply category content + design tone
3. **Customization** – Apply selected colors, gradients, images
4. **HTML Generation** – Build complete HTML/CSS bundle inline
5. **Preview** – Display in iframe with responsive scaling
6. **Export** – Download or copy to clipboard

---

## 🛠️ Development

### Build Production
```bash
npm run build
```

### TypeScript/Lint Check
```bash
npm run lint
```

### Run Tests
```bash
npm run test
```

### Environment Variables
Currently no `.env` required (client-side only). For future backend integration:
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📊 Performance

- **Build Time** – ~1s (Turbopack)
- **Page Load** – ~200-300ms
- **HTML Generation** – <50ms per preview
- **Bundle Size** – ~45KB gzipped

---

## 🎯 Roadmap

See [FEATURES.md](./FEATURES.md) for detailed feature breakdown, timeline, and technical notes.

**Current Focus** – Phase 1: Device preview, color selection, image uploads ✅

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## 💬 Support & Feedback

Have questions or suggestions? Open an issue or reach out:
- **Issues** – [GitHub Issues](https://github.com/yourusername/pin-to-site-pro/issues)
- **Email** – your.email@example.com
- **Twitter** – [@yourhandle](https://twitter.com/yourhandle)

---

## 🎓 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Built with ❤️ to help local businesses get online fast.**
