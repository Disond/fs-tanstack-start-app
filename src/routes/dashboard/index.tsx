import { getSessionFn } from '#/serverFns/session'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
    loader: async () => {
        const session = await getSessionFn()
        return {
            user: session.user,
        }
    },
})

function RouteComponent() {
    const { user } = Route.useLoaderData()
    return <div>Hello "/dashboard/"! {user.name}</div>
}
