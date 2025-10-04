import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createFileRoute } from "@tanstack/react-router";
import VirtualizedTable from "../components.tsx/Table";
import { Icon, IconButton, Pagination } from "@mui/material";
import {
  billStatus,
  type BillInternal,
  type BillStatusType,
} from "../api/bill.types";
import type { Column } from "../components.tsx/table.types";
import { billAllSearchSchema } from "../config/schema";
import { fetchBills } from "../api/bills";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/bills/all")({
  validateSearch: (search) => billAllSearchSchema.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  const { status, page } = Route.useSearch();
  const navigate = Route.useNavigate();
  const selectStatus = status || "";
  const pageCount = 10;

  const {
    data: billsData,
    isLoading,
  } = useQuery({
    queryKey: ["bills", page, status],
    queryFn: () =>
      fetchBills({
        page: page || 1,
        status: status || undefined,
      }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const handleStatusChange = (newStatus: BillStatusType | "") => {
    navigate({
      search: (prev) => ({
        ...prev,
        status: newStatus === "" ? undefined : (newStatus as BillStatusType),
        page: 1,
      }),
      to: "/bills/all",
    });
  };

  const handlePageChange = (newPage: number) => {
    navigate({
      search: (prev) => ({
        ...prev,
        page: newPage,
      }),
      to: "/bills/all",
    });
  };

  const handleFavoriteToggle = (bill: BillInternal) => {
    // TODO: Implement favorite toggle mutation
    console.log("Toggle favorite for bill:", bill);
  };

  const columns: Column<BillInternal>[] = [
    { field: "billNumber", label: "Number", width: 80 },
    { field: "billType", label: "Type", width: 100 },
    { field: "billStatus", label: "Status", width: 100 },
    { field: "billSponsor", label: "Sponsor", width: 400 },
    {
      field: "favorites",
      label: "Favorites",
      width: 80,
      align: "right",
      render: (_, row) => {
        if (row.billNumber !== 1) {
          return (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleFavoriteToggle(row);
              }}
              title="Add to favorites"
            >
              <Icon color="primary">add</Icon>
            </IconButton>
          );
        }
        return (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteToggle(row);
            }}
          >
            <Icon color="error">remove</Icon>
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: '4px',
        paddingTop: "20px",
        paddingBottom: "32px",
        boxSizing: "border-box",
        gap: "20px",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
        <InputLabel id="bill-status-label">Bill status</InputLabel>
        <Select
          labelId="bill-status-label"
          id="bill-status"
          value={selectStatus}
          label="Bill status"
          onChange={(e) =>
            handleStatusChange(e.target.value as BillStatusType | "")
          }
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {Object.values(billStatus).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <VirtualizedTable
        data={billsData?.results || []}
        loading={isLoading}
        columns={columns}
        containerStyle={{
          overflow: "auto",
          border: 1,
          borderColor: "divider",
          boxSizing: "border-box",
          width: { xs: '100%', md: 'fit-content' },
        }}
      />
      <Pagination
        variant="outlined"
        color="primary"
        count={Math.ceil((billsData?.count.billCount || pageCount) / pageCount)}
        page={page || 1}
        onChange={(_, page) => handlePageChange(page)}
      />
    </Box>
  );
}
