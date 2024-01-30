import { z } from 'zod';

export const schema = z
  .object({
    date: z.date(),
    liters: z.string().min(1, 'Campo obrigatório'),
    gasStation: z.string().min(1, 'Campo obrigatório'),
    fuel: z.string().min(1, 'Campo obrigatório'),
  })
  .superRefine(({ date }, ctx) => {
    if (date > new Date()) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Data não pode ser maior que a data atual',
        path: ['date'],
      });
    }
  });

export type FormData = z.infer<typeof schema>;
