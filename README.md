# 📰 React Blog Post App

A simple blog platform built with React that allows users to create, view, update, delete, and search blog posts. Uses `json-server` as a local REST API and `react-router-dom` for navigation between pages.

## ✨ Features

- 🏠 Homepage displays a list of posts (title + preview)
- ➕ Create new blog posts
- 🔍 Search posts by keywords
- 📝 Edit existing posts
- 🗑️ Delete posts
- 📄 View full content of a post
- ⚡ Uses `json-server` for local API simulation
- 🌐 Client-side routing via `react-router-dom`
- 📦 API requests made using `Axios`

## 🖼️ Screenshots
- [HomePage](./image/blog-post%20app%20homepage.JPG)
- [AddNewPostPage](./image/blog-post%20app%20%20post-item-page.JPG)
- [FullContentPage](./image/blog-post%20app%20%20show-full-post.JPG)
- [EditPage](./image/blog-post%20app%20%20edit-page.JPG)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [json-server](https://www.npmjs.com/package/json-server)

Install `json-server` globally if you haven’t already:

```console
npm install -g json-server
```

### Installation

1. **Clone the repository:**
```console
   git clone https://github.com/Manabe7/react-router-practice-blogposts.git
   cd my-react-route
```
2. **Install dependencies:**
```console
    npm install
```
3. **Start the JSON Server:**
```console
    npx json-server -p 3500 -w data/db.json 
```

4. **Start the Vite development server:**
```console
    npm run dev
```

## 🖱️ Usage
- The homepage shows a preview of each blog post.

- Clicking on a post takes you to a details page with the full content.

- A search bar lets users filter posts by keywords.

- Posts can be created, edited, or deleted.

- All post data is handled via API requests to json-server.

## 🛠 Tech Stack
- React (Vite)
- Axios
- React Router DOM
- JSON Server (mock API)
- JavaScript
- CSS