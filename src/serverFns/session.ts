import { createServerFn } from '@tanstack/react-start'
import { authFnMiddleware } from '../middleware/auth'

export const getSessionFn = createServerFn({ method: 'GET' })
    .middleware([authFnMiddleware])
    .handler(async ({ context }) => {
        return context.session
    })
