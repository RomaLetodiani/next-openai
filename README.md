# AI

## ✨ Features

- 🎨 Modern UI with ShadCN components and Tailwind CSS
- ⚡ Server Actions for efficient API calls
- 📱 Responsive design for all devices

## 🚀 Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | Next.js App Router + React |
| UI       | Tailwind CSS + ShadCN UI   |
| Server   | Server Actions             |
| AI       | OpenAI LLM                 |
| Storage  | localStorage               |
| IDE      | Cursor                     |

## 🛠️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/RomaLetodiani/next-openai.git
cd next-openai
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with:

```
OPENAI_API_KEY=your_api_key
OPENAI_BASE_URL=your_base_url
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
📦src
 ┣ 📂actions
 ┃ ┗ 📜actions.ts
 ┣ 📂app
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂assets
 ┃ ┗ 📜socials.svgs.tsx
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜avatar.tsx
 ┃ ┃ ┣ 📜badge.tsx
 ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜select.tsx
 ┃ ┃ ┣ 📜skeleton.tsx
 ┃ ┃ ┣ 📜sonner.tsx
 ┃ ┃ ┣ 📜switch.tsx
 ┃ ┃ ┣ 📜textarea.tsx
 ┃ ┃ ┗ 📜tooltip.tsx
 ┃ ┣ 📜lang-toggler.tsx
 ┃ ┗ 📜logo.tsx
 ┣ 📂contexts
 ┃ ┗ 📜lang.context.tsx
 ┣ 📂layout
 ┃ ┣ 📜footer.tsx
 ┃ ┗ 📜header.tsx
 ┣ 📂lib
 ┃ ┣ 📜socials.const.tsx
 ┃ ┣ 📜translations.ts
 ┃ ┗ 📜utils.ts
 ┣ 📂prompts
 ┃ ┗ 📜.gitkeep
 ┗ 📂types
   ┗ 📜lang.type.ts
```

## 🔧 Development

- Built with TypeScript for type safety
- Uses Server Actions for API calls
- Implements modern React patterns and hooks
- Follows atomic component design principles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful components
- [Next.js](https://nextjs.org/) for the amazing framework
