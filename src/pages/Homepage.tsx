import Box from "@mui/material/Box";
import VirtualizedTable from "../components.tsx/Table";
import IconButton from "@mui/material/IconButton";
import type { Bill, BillTableRow } from "./homepage.types";
import type { Column } from "../components.tsx/table.types";
import Typography from "@mui/material/Typography";
import { Icon, Pagination, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function Index() {
  const [tab, setTab] = useState<number>(0);
  const bills: BillTableRow[] = [
    {
      billNumber: 1,
      billType: "Public",
      billStatus: "Current",
      billSponsor: "John Doe",
      favorites: null,
    },
    {
      billNumber: 2,
      billType: "Public",
      billStatus: "Current",
      billSponsor: "Jane Doe",
      favorites: null,
    },
  ];

  const favorites: BillTableRow[] = [
    {
      billNumber: 2,
      billType: "Public",
      billStatus: "Current",
      billSponsor: "Jane Doe",
      favorites: null,
    },
  ];

  const columns: Column<Bill>[] = [
    { field: "billNumber", label: "Number", width: 80 },
    { field: "billType", label: "Type", width: 200 },
    { field: "billStatus", label: "Status", width: 100 },
    { field: "billSponsor", label: "Sponsor", width: 100 },
    {
      field: "favorites",
      label: "Favorites",
      width: 150,
      render: (_, row) => {
        if (row.billNumber === 1) {
          return (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                console.log(row);
              }}
            >
              <Icon color="primary">add</Icon>
            </IconButton>
          );
        }
        return (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              console.log(row);
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
        paddingTop: "20px",
        gap: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Legislation bills
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          aria-label="bill tabs"
        >
          <Tab label="All bills" />
          <Tab label="Favorite bills" />
        </Tabs>
      </Box>

      {tab === 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            gap: "20px",
          }}
        >
          <VirtualizedTable
            data={bills}
            columns={columns}
            containerStyle={{
              overflow: "auto",
              border: 1,
              borderColor: "divider",
              width: "fit-content",
            }}
          />
          <Pagination count={10} variant="outlined" color="primary" />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            gap: "20px",
          }}
        >
          <VirtualizedTable
            data={favorites}
            columns={columns}
            containerStyle={{
              overflow: "auto",
              border: 1,
              borderColor: "divider",
              width: "fit-content",
            }}
          />
          <Pagination count={10} variant="outlined" color="primary" />
        </Box>
      )}
    </Box>
  );
}

export default Index;
