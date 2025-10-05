import { IconButton, Icon } from "@mui/material";
import type { Column } from "../types/table.types";
import type { BillInternal } from "../../api/bill.types";

export const createBillColumns = (
  handleFavoriteToggle: (bill: BillInternal) => void,
  isFavorite?: (id: string) => boolean
): Column<BillInternal>[] => [
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
      const isInFavorites = isFavorite ? isFavorite(row.id) : false;
      
      return (
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteToggle(row);
          }}
          title={isInFavorites ? "Remove from favorites" : "Add to favorites"}
        >
          <Icon color={isInFavorites ? "error" : "primary"}>
            {isInFavorites ? "remove" : "add"}
          </Icon>
        </IconButton>
      );
    },
  },
];