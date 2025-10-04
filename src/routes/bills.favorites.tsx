import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/bills/favorites")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/bills/favorites"!</div>;
}
