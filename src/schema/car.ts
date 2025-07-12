import { z } from "zod";

export const CarSchema = z.object({
	id: z.string().uuid().optional(),
	brand: z.string().min(1, "Marca obrigatória"),
	model: z.string().min(1, "Modelo obrigatório"),
	year: z.number().int().gte(1886, "Ano inválido"),
});

export type Car = z.infer<typeof CarSchema>;
