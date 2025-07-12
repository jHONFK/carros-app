import { useEffect, useState } from "react";
import type { Car } from "../../schema/car";
import { socket } from "../../api/socket.ts";

export default function CarList() {
	const [cars, setCars] = useState<Car[]>([]);

	useEffect(() => {
		socket.emit("car:list");
		socket.on("car:list", (list: Car[]) => setCars(list));
		socket.on("car:new", (car: Car) => setCars((p) => [...p, car]));
		return () => {
			socket.off("car:list");
			socket.off("car:new");
		};
	}, []);

	if (!cars.length)
		return (
			<p className="mt-8 text-gray-500 text-center">
				Nenhum carro cadastrado ainda.
			</p>
		);

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{cars.map((c) => (
				<article key={c.id} className="card bg-base-200 shadow-lg">
					<div className="card-body">
						<h3 className="card-title">
							{c.brand}{" "}
							<span className="font-light text-base-content/70">{c.model}</span>
						</h3>
						<div className="card-actions justify-end">
              <span className="badge badge-outline badge-secondary">
                {c.year}
              </span>
						</div>
					</div>
				</article>
			))}
		</div>
	);
}
