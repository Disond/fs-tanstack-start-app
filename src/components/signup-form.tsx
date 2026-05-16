import { signupSchema } from '#/lib/schemas/auth-schemas'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { Button } from '#/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#/components/ui/card'
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Link, useNavigate } from '@tanstack/react-router'
import { useTransition } from 'react'
import { authClient } from '#/lib/auth-client'

export function SignUpForm() {
    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        validators: {
            onSubmit: signupSchema,
        },
        onSubmit: async ({ value }) => {
            startTransition(async () => {
                await authClient.signUp.email({
                    name: value.name,
                    email: value.email,
                    password: value.password,
                    fetchOptions: {
                        onSuccess: () => {
                            toast.success('Account created successfully')
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
            <Card className="max-w-lg px-6 py-8 sm:p-12 relative">
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
                            Signup to Team{' '}
                            <span className="text-primary">System</span>
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground font-normal">
                            Signup to your account now
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <form
                        noValidate
                        id="signup-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.handleSubmit()
                        }}
                    >
                        <FieldGroup className="gap-6">
                            <Field className="grid md:grid-cols-2 md:gap-6 gap-3">
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="text-sm text-medium text-card-foreground gap-2 cursor-pointer dark:bg-background rounded-lg h-9 shadow-xs"
                                >
                                    <img
                                        src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                                        alt="google icon"
                                        className="h-4 w-4"
                                    />
                                    Sign up with Google
                                </Button>
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="text-sm text-medium text-card-foreground gap-2 cursor-pointer dark:bg-background rounded-lg h-9 shadow-xs"
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
                                    Sign up with Github
                                </Button>
                            </Field>
                            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                                <span className="px-4">or sign up with</span>
                            </FieldSeparator>

                            <div className="flex flex-col gap-4">
                                <form.Field
                                    name="name"
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
                                                    Name
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
                                                    placeholder="John Doe"
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
                                        htmlFor="name"
                                        className="text-sm text-muted-foreground font-normal"
                                    >
                                        Name*
                                    </FieldLabel>
                                    <Input
                                        id="text"
                                        type="text"
                                        placeholder="enter your name"
                                        required
                                        className="dark:bg-background shadow-xs h-9"
                                    />
                                </Field> */}

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
                                        className="dark:bg-background shadow-xs h-9"
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
                                        className="dark:bg-background shadow-xs h-9"
                                    />
                                </Field> */}
                            </div>

                            <Field className="gap-4">
                                <Button
                                    type="submit"
                                    form="signup-form"
                                    disabled={isPending}
                                    size={'lg'}
                                    className="rounded-lg cursor-pointer h-10 hover:bg-primary/80"
                                >
                                    {isPending ? 'Creating' : 'Create Account'}
                                </Button>
                                <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                                    Already have an account?{' '}
                                    <Link
                                        to="/signin"
                                        className="font-medium text-card-foreground no-underline!"
                                    >
                                        Sign in
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
