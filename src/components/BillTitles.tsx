import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import type { BillInternal } from "../api/bill.types";
import Link from "@mui/material/Link";

function BillTitles({ bill }: { bill: BillInternal | null }) {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!bill) return null;

  const hasEnglish = !!bill.titleEn;
  const hasGaeilge = !!bill.titleGa;

  const tabs = [
    {
      label: "English",
      value: 0,
      available: hasEnglish,
      content: bill.titleEn,
    },
    {
      label: "Gaeilge",
      value: 1,
      available: hasGaeilge,
      content: bill.titleGa,
    },
  ].filter((tab) => tab.available);

  if (tabs.length > 0 && tabs.findIndex((t) => t.value === activeTab) === -1) {
    setActiveTab(tabs[0].value);
  }

  if (tabs.length === 0) return null;

  const currentContent =
    tabs.find((t) => t.value === activeTab)?.content || "Title not provided.";

  return (
    <Box sx={{ width: {xs: "100%", md:"340px"} }}>
      <Tabs
        value={activeTab}
        onChange={(_, value) => setActiveTab(value)}
        aria-label="bill title tabs"
        textColor="primary"
        indicatorColor="primary"
      >
        {tabs.map((tab) => (
          <Tab
            component={Link}
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Box
        sx={{
          width: "100%",
          maxWidth: "320px",
          minHeight: "140px",
          paddingTop: "12px",
          padding: "8px",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          mt: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {currentContent}
        </Typography>
      </Box>
    </Box>
  );
}

export default BillTitles;
