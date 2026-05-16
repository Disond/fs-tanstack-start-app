import { authClient } from '#/lib/auth-client'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

export function SingOutButton() {
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Signed out successfully')
                },
                onError: ({ error }) => {
                    toast.error(error.message)
                },
            },
        })
    }

    return (
        <Button onClick={handleSignOut}>
            <LogOut /> Logout
        </Button>
    )
}
