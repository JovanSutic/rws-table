import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  retainSearchParams,
  useMatch,
  useNavigate,
} from "@tanstack/react-router";
import { billAllSearchSchema } from "../validations/schema";

export const Route = createFileRoute("/bills")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/bills") {
      throw redirect({
        to: "/bills/all",
        replace: true,
      });
    }
    return {};
  },
  validateSearch: (search) => billAllSearchSchema.parse(search),
  search: {
    middlewares: [retainSearchParams(true)],
  },
  component: RouteComponent,
});

function RouteComponent() {
  const isAllBillsActive = useMatch({
    from: "/bills/all",
    shouldThrow: false,
  });
  const activeTabValue = isAllBillsActive ? 0 : 1;
  const navigate = useNavigate();

  const handleTabClick = (targetPath: "/bills/all" | "/bills/favorites") => {
    navigate({
      to: targetPath,
    });
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "924px" },
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingX: "4px",
          paddingTop: "12px",
          boxSizing: "border-box",
          gap: "20px"
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: 600 }}
        >
          Legislation bills
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTabValue} aria-label="bill tabs">
            <Tab
              label="All bills"
              value={0}
              component={Link}
              onClick={() => handleTabClick("/bills/all")}
            />
            <Tab
              label="Favorite bills"
              value={1}
              component={Link}
              onClick={() => handleTabClick("/bills/favorites")}
            />
          </Tabs>
        </Box>
      </Box>
      <Outlet />
    </>
  );
}
