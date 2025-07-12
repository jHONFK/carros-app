import CarForm from "../../components/CarForm";
import CarList from "../../components/CarList";

export default function CarsPage() {
	return (
		<>
			<h1 className="text-3xl font-bold mb-8 mt-4">Carros</h1>
			<CarForm />
			<div className="divider my-8" />
			<CarList />
		</>
	);
}
