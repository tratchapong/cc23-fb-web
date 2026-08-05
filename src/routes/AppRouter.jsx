import Friends from "@/pages/Friends";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router";

const commonPath = [
	{path: '/public', element: <p>public</p>}
]

const guestRouter = createBrowserRouter([
	{ path: '/', Component: Login },
	{ path: '*', element: <Navigate to='/' /> },
	...commonPath
])

const userRouter = createBrowserRouter([
	{
		path: '/', element: <>
			<div className="py-4 border">Header</div>
			<Outlet />
		</>,
		children: [
			{ path: '', Component : Home},
			{ path: 'friends', Component: Friends },
			{ path: 'profile', Component: Profile },
			{ path: '*', element: <Navigate to='/' /> },
			...commonPath
		]
	},
])

function AppRouter() {
	// const user = 'andy@ggg.mail'
	const user = null
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider router={finalRouter} />
	)
}

export default AppRouter