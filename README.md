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

### useEffect 
<bold>useEffect(() => {}, []);</bold>
The useEffect <bold>hook</bold> in React is used to perform side effects in functional components. Side effects can include things like fetching data, directly updating the DOM, and timers.<br>
Inside the function - Perform your task like fetch an API<br>
Dependancy Array "[]" : The second argument to 'useEffect' is an array of dependencies. When the dependency array is empty, the effect runs only once, after the initial render<br>
This is similar to componentDidMount in class components. It means the effect will not re-run on updates unless the component is unmounted and remounted. If the [] is a number it will run the function the number of times specified.

### Setting Up a Proxy in Vite Configuration
In your Vite configuration file, you can set up a proxy to route API requests to your backend server. This allows you to use a cleaner URL structure in your frontend code.<br>

Here is the configuration to proxy requests from /api to http://localhost:8000:

<code style="width:100%"> 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});     
</code>

#### How it works
Proxy Setup: Requests to /api are forwarded to http://localhost:8000.<br>
Path Rewrite: The /api prefix is removed from the request path before sending it to the backend server.<br>
Change Origin: This option ensures the origin of the host header matches the target URL.<br>

### Passing a function via a prop
Function
<code>
 const addplayer = (newplayer) => {
    console.log(newplayer);
  }
</code>

Passing Function as a prop

<code>
<Route path='/add-player' element={<AddplayerPage addPlayerSubmit={addPlayer}/>} />
</code>

<p>Receiving and Using the Function in the Child Component:<br>
In the AddplayerPage component, the addPlayerSubmit prop is received and can be called whenever necessary, such as on form submission.</p>
<code>
function AddplayerPage({ addPlayerSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newplayer = { /* player details */ };
    addPlayerSubmit(newplayer);
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Add player</button>
    </form>
  );
}
</code>
<p>Passing and Calling a Function as a Prop in React
In React, it's common to pass functions as props to child components so that the child components can communicate back to the parent components. This pattern is often used for event handling and data submission. Here's an example to illustrate how this works in a React application.</p>

