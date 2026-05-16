import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Checkbox } from './ui/checkbox'
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from './ui/field'
import { Input } from './ui/input'
import { useTransition } from 'react'
import { useForm } from '@tanstack/react-form'
import { loginSchema } from '#/lib/schemas/auth-schemas'
import { toast } from 'sonner'
import { authClient } from '#/lib/auth-client'
import { SocialSingInButton } from './SocialSignInButton'

export function SignInForm() {
    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        validators: {
            onSubmit: loginSchema,
        },
        onSubmit: async ({ value }) => {
            startTransition(async () => {
                await authClient.signIn.email({
                    email: value.email,
                    password: value.password,
                    fetchOptions: {
                        onSuccess: () => {
                            toast.success('Logged in successfully')
                            navigate({
                                to: '/',
                            })
                        },
                        onError: ({ error }) => {
                            toast.error(error.message)
                        },
                    },
                })
            })
        },
    })
    return (
        <div className="py-10 md:py-20 max-w-lg px-4 sm:px-0 mx-auto w-full">
            <Card className="max-w-lg px-6 py-8 sm:p-12 relative gap-6">
                <CardHeader className="text-center gap-6 p-0">
                    <div className="mx-auto">
                        <a href="">
                            <img
                                src="/icon1.png"
                                alt="shadcnspace"
                                className="dark:hidden h-10 w-10"
                            />
                            <img
                                src="/icon1.png"
                                alt="shadcnspace"
                                className="hidden dark:block h-10 w-10"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <CardTitle className="text-2xl font-medium text-card-foreground">
                            Welcome to Team{' '}
                            <span className="text-primary">System</span>
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground font-normal">
                            Login to your account now
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <form
                        noValidate
                        id="signin-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.handleSubmit()
                        }}
                    >
                        <FieldGroup className="gap-6">
                            <Field className="grid md:grid-cols-2 md:gap-6 gap-3">
                                {/* <Button
                                    variant="outline"
                                    type="button"
                                    className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                                >
                                    <img
                                        src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                                        alt="google icon"
                                        className="h-4 w-4"
                                    />
                                    Sign in with Google
                                </Button> */}
                                <SocialSingInButton provider="google" />
                                <SocialSingInButton provider="github" />
                                {/* <Button
                                    variant="outline"
                                    type="button"
                                    className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                                >
                                    <img
                                        src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                                        alt="github icon"
                                        className="dark:hidden  h-4 w-4"
                                    />
                                    <img
                                        src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                                        alt="github icon"
                                        className="hidden dark:block  h-4 w-4"
                                    />
                                    Sign in with Github
                                </Button> */}
                            </Field>
                            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                                <span className="px-4">or sign in with</span>
                            </FieldSeparator>

                            <div className="flex flex-col gap-4">
                                <form.Field
                                    name="email"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field
                                                data-invalid={isInvalid}
                                                className="gap-1.5"
                                            >
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                    className="text-sm text-muted-foreground font-normal"
                                                >
                                                    Email
                                                </FieldLabel>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    aria-invalid={isInvalid}
                                                    placeholder="example@example.com"
                                                    type="email"
                                                    autoComplete="off"
                                                    className="dark:bg-background shadow-xs h-9"
                                                />
                                                {isInvalid && (
                                                    <FieldError
                                                        errors={
                                                            field.state.meta
                                                                .errors
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        )
                                    }}
                                />
                                {/* <Field className="gap-1.5">
                                    <FieldLabel
                                        htmlFor="email"
                                        className="text-sm text-muted-foreground font-normal"
                                    >
                                        Email*
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="example@shadcnspace.com"
                                        required
                                        className="dark:bg-background h-9 shadow-xs"
                                    />
                                </Field> */}

                                <form.Field
                                    name="password"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field
                                                data-invalid={isInvalid}
                                                className="gap-1.5"
                                            >
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                    className="text-sm text-muted-foreground font-normal"
                                                >
                                                    Password
                                                </FieldLabel>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    aria-invalid={isInvalid}
                                                    placeholder="********"
                                                    type="password"
                                                    autoComplete="off"
                                                    className="dark:bg-background shadow-xs h-9"
                                                />
                                                {isInvalid && (
                                                    <FieldError
                                                        errors={
                                                            field.state.meta
                                                                .errors
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        )
                                    }}
                                />
                                {/* <Field className="gap-1.5">
                                    <FieldLabel
                                        htmlFor="password"
                                        className="text-sm text-muted-foreground font-normal"
                                    >
                                        Password*
                                    </FieldLabel>

                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        className="dark:bg-background h-9 shadow-xs"
                                    />
                                </Field> */}
                            </div>

                            <Field
                                orientation="horizontal"
                                className="justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        id="terms"
                                        defaultChecked
                                        className="cursor-pointer"
                                    />
                                    <FieldLabel
                                        htmlFor="terms"
                                        className="text-sm text-primary font-normal cursor-pointer"
                                    >
                                        Remember this device
                                    </FieldLabel>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm text-card-foreground font-medium text-end"
                                >
                                    Forgot password?
                                </a>
                            </Field>

                            <Field className="gap-4">
                                <Button
                                    type="submit"
                                    form="signin-form"
                                    disabled={isPending}
                                    size={'lg'}
                                    className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                                >
                                    {isPending ? 'Logging in ...' : 'Login'}
                                </Button>
                                <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        to="/signup"
                                        className="font-medium text-card-foreground no-underline!"
                                    >
                                        Create an account
                                    </Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
