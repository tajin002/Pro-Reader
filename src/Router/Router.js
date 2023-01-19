import About from "../Components/About/About";
import BookDetails from "../Components/Book Details/BookDetails";
import Books from "../Components/Books/Books";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path : '/', 
        element : <Main />,
        errorElement : <div>Opps Not fount</div>,
        children : [
            {path: '/' ,  element : <Home/>},
            {path: 'home' ,  element : <Home/>},
            {
                path : 'books',
                loader: async()=>{
                    return fetch('https://api.itbook.store/1.0/search/mongodb')
                },
                element : <Books />
            },
            {
                path : 'book/:Id',
                loader:async({params})=>{
                    return fetch(`https://api.itbook.store/1.0/search/${params.Id}`)
                },
                element: <BookDetails/>
            },
            {path : 'about', element : <About />}
        ]
    }
])