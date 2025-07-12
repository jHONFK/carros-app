import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CarSchema, type Car } from "../../schema/car";
import { socket } from "../../api/socket.ts";

export default function CarForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Car>({ resolver: zodResolver(CarSchema) });

	const onSubmit = (data: Car) => {
		socket.emit("car:add", data);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="card w-full max-w-md mx-auto bg-white dark:bg-base-200 shadow-lg rounded-lg overflow-hidden"
		>
			<div className="card-body space-y-4">
				<h2 className="card-title">Adicionar carro</h2>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Marca</span>
					</label>
					<input
						{...register("brand")}
						className="input input-bordered w-full bg-white dark:bg-base-100"
						placeholder="Ex: Volkswagen"
					/>
					{errors.brand && (
						<span className="text-error text-sm mt-1">
              {errors.brand.message}
            </span>
					)}
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Modelo</span>
					</label>
					<input
						{...register("model")}
						className="input input-bordered w-full bg-white dark:bg-base-100"
						placeholder="Ex: Fusca"
					/>
					{errors.model && (
						<span className="text-error text-sm mt-1">
              {errors.model.message}
            </span>
					)}
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Ano</span>
					</label>
					<input
						type="number"
						{...register("year", { valueAsNumber: true })}
						className="input input-bordered w-full bg-white dark:bg-base-100"
						placeholder="Ex: 1972"
					/>
					{errors.year && (
						<span className="text-error text-sm mt-1">
              {errors.year.message}
            </span>
					)}
				</div>

				<div className="card-actions">
					<button type="submit" className="btn btn-primary w-full">
						Salvar
					</button>
				</div>
			</div>
		</form>
	);
}
