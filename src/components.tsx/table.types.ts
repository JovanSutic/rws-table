import type { SxProps } from "@mui/material";

export interface Column<T = Record<string, unknown>> {
  field: keyof T | string;
  label: string;
  width: number;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface VirtualizedTableProps<T = Record<string, unknown>> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  error?: string | null;
  rowHeight?: number;
  overscan?: number;
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  stickyHeader?: boolean;
  tableStyle?: SxProps;
  containerStyle?: SxProps;
}