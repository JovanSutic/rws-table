import z from "zod";
import { billStatus } from "../api/bill.types";

export const billAllSearchSchema = z.object({
  status: z.enum(billStatus).optional(),
  page: z.number().optional(),
});