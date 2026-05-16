import { authClient } from '#/lib/auth-client'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

type SocialProvider = 'google' | 'github'

type SocialSingInButtonProps = {
    provider: SocialProvider
    callbackURL?: string
    mode?: 'signin' | 'signup'
}

const providerOpts = {
    google: {
        label: 'Google',
        icon: (
            <img
                src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                alt="google icon"
                className="h-4 w-4"
            />
        ),
    },

    github: {
        label: 'GitHub',
        icon: (
            <>
                <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                    alt="github icon"
                    className="dark:hidden h-4 w-4"
                />
                <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                    alt="github icon"
                    className="hidden dark:block h-4 w-4"
                />
            </>
        ),
    },
}

export function SocialSingInButton({
    provider,
    callbackURL = '/',
    mode = 'signin',
}: SocialSingInButtonProps) {
    const [isLoading, setIsLoading] = useState(false)
    const opt = providerOpts[provider]
    const optMode = mode === 'signin' ? 'Sign in' : 'Sign up'

    const handleSignIn = async () => {
        try {
            setIsLoading(true)

            await authClient.signIn.social({
                provider,
                callbackURL,
                fetchOptions: {
                    onError: ({ error }) => {
                        toast.error(error.message)
                        setIsLoading(false)
                    },
                },
            })
        } catch (e) {
            setIsLoading(false)
        }
    }

    return (
        <Button
            variant="outline"
            type="button"
            onClick={handleSignIn}
            disabled={isLoading}
            className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
        >
            {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
            ) : (
                opt.icon
            )}
            {optMode} with {opt.label}
        </Button>
    )
}
