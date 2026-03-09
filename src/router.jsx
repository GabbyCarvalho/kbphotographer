import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./pages/layout/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Galleries from "./pages/Galleries"
import Faq from "./pages/Faq"
import Engagements from "./pages/Engagements"
import Ski from "./pages/Ski"
import Headshots from "./pages/Headshots"
import Contact from "./pages/Contact"
import Store from "./pages/Store"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost";
import Policy from "./pages/subpages/Policy"
import VendorsList from "./pages/subpages/VedorsList"
import BecomeVendor from "./pages/subpages/BecomeVendor"




const router = createBrowserRouter ([{
    path: "/",
    element: <RootLayout />,
    children: [
        {index: true, element: <Home/>},
        {path: "about", element: <About/>},
        {path: "galleries", element: <Galleries />},
        {path: "faq" , element: <Faq/>},
        {path: "engagements", element: <Engagements />},
        {path: "ski", element: <Ski/>},
        {path: "headshots", element: <Headshots />},
        {path: "contact", element: <Contact/>},
        {path: "store", element: <Store />},

        {
            path: "blog",
            children: [
                { index: true, element: <Blog /> },        
                { path: ":slug", element: <BlogPost /> }   
            ]
        },   

        {path: "privacy-policy" , element: <Policy />},
        {path: "vendors-list", element: <VendorsList/>},
        {path: "become-vendor", element: <BecomeVendor/>}

    ]
}])

export default router