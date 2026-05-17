import { auth } from '#/lib/auth'
import { redirect } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'

const fetchSession = async () => {
    const headers = getRequestHeaders()
    return await auth.api.getSession({ headers })
}

export const authFnMiddleware = createMiddleware({ type: 'function' }).server(
    async ({ next }) => {
        const session = await fetchSession()
        if (!session) throw redirect({ to: '/signin' })

        return next({ context: { session } })
    },
)

export const authMiddleware = createMiddleware({ type: 'request' }).server(
    async ({ next, request }) => {
        const url = new URL(request.url)
        if (!url.pathname.startsWith('/dashboard')) {
            return next()
        }

        const session = await fetchSession()
        if (!session) throw redirect({ to: '/signin' })

        return next()
    },
)
