type BillStatus =
  | "Current"
  | "Withdrawn"
  | "Enacted"
  | "Rejected"
  | "Defeated"
  | "Lapsed";

export interface Bill {
  billNumber: number;
  billType: string;
  billStatus: BillStatus;
  billSponsor: string;
}

export interface BillTableRow extends Bill {
  favorites: unknown;
}
