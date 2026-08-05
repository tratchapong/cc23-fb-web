import UserLayout from "@/layouts/UserLayout";
import Friends from "@/pages/Friends";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import useUserStore from "@/stores/userStore";
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
		path: '/', Component: UserLayout,
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
	const user = useUserStore(state => state.user)
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider key={user?.id} router={finalRouter} />
	)
}

export default AppRouter