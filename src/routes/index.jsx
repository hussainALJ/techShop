import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    }
])

export const AppRouter = () => <RouterProvider router={router} />