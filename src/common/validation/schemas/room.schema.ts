import { z } from 'zod';

export const createRoomSchema = z
  .object({
    name: z.string(),
    type: z.string(),
    date: z.string(),
    number: z.string(),
  })
  .required();

export type CreateRoomDto = z.infer<typeof createRoomSchema>;
