import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Skeleton,
  Alert,
  AlertTitle,
} from "@mui/material";
import type { Column, VirtualizedTableProps } from "./table.types";

const SkeletonRow = <T,>({
  columns,
}: {
  columns: Column<T>[];
}) => (
  <TableRow>
    {columns.map((col, idx) => (
      <TableCell
        key={idx}
        sx={{
          width: col.width,
          minWidth: col.width,
          maxWidth: col.width,
        }}
      >
        <Skeleton variant="text" width="80%" />
      </TableCell>
    ))}
  </TableRow>
);

function VirtualizedTable<T = Record<string, unknown>>({
  data,
  columns,
  loading = false,
  error = null,
  rowHeight = 53,
  overscan = 10,
  emptyMessage = "No data available",
  onRowClick,
  stickyHeader = true,
  tableStyle = {},
  containerStyle = {},
}: VirtualizedTableProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan,
  });


  const totalWidth = columns.reduce((sum, col) => {
    const width = typeof col.width === 'number' ? col.width : parseInt(String(col.width)) || 0;
    return sum + width;
  }, 0);

  const renderCell = (
    column: Column<T>,
    row: T,
    rowIndex: number
  ): React.ReactNode => {
    if (column.render) {
      const value = row[column.field as keyof T];
      return column.render(value, row, rowIndex);
    }

    const value = row[column.field as keyof T];

    if (value === null || value === undefined) {
      return "";
    }

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  };

  if (error) {
    return (
      <Paper sx={{ p: 3 }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </Paper>
    );
  }

  if (loading) {
    return (
      <TableContainer sx={containerStyle} id="loading-table-container">
        <Table stickyHeader={stickyHeader} sx={tableStyle}>
          <TableHead>
            <TableRow>
              {columns.map((col, idx) => (
                <TableCell
                  key={idx}
                  align={col.align || "left"}
                  sx={{
                    width: col.width,
                    fontWeight: "bold",
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 10 }).map((_, idx) => (
              <SkeletonRow key={idx} columns={columns} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  if (data.length === 0) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" color="text.secondary" align="center">
          {emptyMessage}
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer 
      ref={parentRef} 
      id="virtual-table"
      sx={{
        ...containerStyle,
        overflow: 'auto',
      }}
    >
      <Box sx={{ minWidth: totalWidth }}>
        <Table stickyHeader={stickyHeader} sx={{ tableLayout: 'fixed', width: totalWidth }}>
          <TableHead>
            <TableRow>
              {columns.map((col, idx) => (
                <TableCell
                  key={idx}
                  align={col.align || "left"}
                  sx={{
                    width: col.width,
                    minWidth: col.width,
                    maxWidth: col.width,
                    fontWeight: "bold",
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={columns.length}
                sx={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  position: "relative",
                  p: 0,
                  border: 0,
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const row = data[virtualRow.index];
                  return (
                    <Box 
                      key={virtualRow.key}
                      onClick={() => onRowClick?.(row, virtualRow.index)}
                      className="table-row"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${totalWidth}px`,
                        minWidth: `${totalWidth}px`,
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                        display: "flex",
                        cursor: onRowClick ? "pointer" : "default",
                      }}
                    >
                      {columns.map((col, colIdx) => (
                        <Box
                          key={colIdx}
                          className="table-cell"
                          sx={{
                            width: col.width,
                            minWidth: col.width,
                            maxWidth: col.width,
                            flexShrink: 0,
                            px: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              col.align === "center"
                                ? "center"
                                : col.align === "right"
                                  ? "flex-end"
                                  : "flex-start",
                            fontSize: "0.875rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            borderBottom: 1,
                            borderColor: "divider",
                            transition: "background-color 0.2s",
                            ".table-row:hover &": {
                              backgroundColor: "action.hover",
                            },
                          }}
                        >
                          {renderCell(col, row, virtualRow.index)}
                        </Box>
                      ))}
                    </Box>
                  );
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}

export default VirtualizedTable;