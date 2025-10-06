import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: ({ location }) => {
      if (location.pathname === "/") {
        throw redirect({
          to: "/bills/all",
          replace: true,
        });
      }
      return {};
    },
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>Index</div>)
}
