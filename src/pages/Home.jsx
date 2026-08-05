import useUserStore from "@/stores/userStore"

function Home() {
	const logout = useUserStore(state => state.logout)
	const user = useUserStore(state=> state.user)
	return (
		<div>
			<div className="text-4xl">Hello, {user.firstName}</div>
			<button className="btn btn-info" onClick={logout}>Logout</button>
		</div>
	)
}

export default Home