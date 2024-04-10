import About from "../pages/about"
import Contact from "../pages/contact"
import Home from "../pages/home"
import Project from "../pages/project"


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/project', component: Project},
    {path: '/contact', component: Contact}
];

export {publicRoutes}