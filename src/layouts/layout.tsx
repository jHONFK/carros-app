import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<header className="bg-primary text-primary-content shadow-md">
				<div className="navbar container mx-auto">
					<div className="navbar-start">
						<span className="font-extrabold text-xl">Carros App</span>
					</div>
					<div className="navbar-end gap-4">
						<NavLink to="/"    className="btn btn-ghost btn-sm">Home</NavLink>
						<NavLink to="/cars" className="btn btn-ghost btn-sm">Carros</NavLink>
					</div>
				</div>
			</header>

			<main className="container mx-auto p-6">
				<Outlet />
			</main>
		</>
	);
}
