import { z } from 'zod';
export const productZodSchema = z.object({
    produto: z.string({ required_error: 'Produto requerido',
     invalid_type_error: 'O Produto precisa ser uma string'}),
    valor: z.number({ required_error: 'Valor requerido',
    invalid_type_error: 'O Valor precisa ser um número inteiro'}).positive().int(),
    descricao: z.string({ required_error: 'Descrição requerida'}),
    created: z.date().optional(),
    updated: z.date().optional(),
});

export const updateZodSchema = z.object({
    produto: z.string().optional(),
    valor: z.number().int().optional(),
    descricao: z.string().optional(),
    created: z.date().optional(),
    updated: z.date().optional(),
});

export type IProduct = z.infer<typeof productZodSchema>;