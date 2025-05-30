# React + Vite

I'm just using the free version of this API so I don't get a lot of the features like player photos, live stats and scores, etc

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dependencies
<ul>
<li>react-icons: ^5.0.1</li>
<li>react-router-dom: ^6.22.3</li>
<li>react-spinners: ^0.13.8</li>
<li>react-toastify: ^10.0.4</li>
<li>json-server: ^1.0.0-alpha.23</li>
<li>tailwindcss: ^3.4.1</li>
</ul>

#### How it works
Proxy Setup: Requests to /api are forwarded to http://localhost:8000.<br>
Path Rewrite: The /api prefix is removed from the request path before sending it to the backend server.<br>
Change Origin: This option ensures the origin of the host header matches the target URL.<br>
