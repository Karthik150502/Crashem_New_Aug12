import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { User } from "@/app/models/user"
import { compare } from "bcryptjs"
import { connectDb } from "@/app/lib/utils"
export const options = {
    providers: [
        GitHubProvider({
            async profile(profile) {
                try {
                    connectDb()
                } catch (error) {
                    return null;
                }
                const foundUser = await User.findOne({ email: profile?.email })
                console.log("Profile GitHub: ", profile)
                if (foundUser) {
                    return {
                        ...foundUser
                    }
                }
                const newUser = await User.create({
                    name: profile?.name,
                    email: profile?.email,
                    githubId: profile?.id,
                })

                return {
                    id: profile?.id
                }
            },
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        }),



        GoogleProvider({
            async profile(profile, tokens) {
                try {
                    connectDb()
                } catch (error) {
                    return null;
                }
                const foundUser = await User.findOne({ email: profile?.email })
                if (foundUser) {
                    return {
                        ...foundUser
                    }
                }
                const newUser = await User.create({
                    name: profile?.name,
                    email: profile?.email,
                    googleId: profile?.sub
                })

                return {
                    id: profile?.sub
                }
            },
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || ''
        }),



        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Your email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                },
            },
            // async authorize(creds) {
            //     try {
            //         await connectDb()
            //         const foundUser = await User.findOne({ email: creds?.email }).select("+password")

            //         if (foundUser) {
            //             console.log("User exists...")
            //             const match = await compare(creds?.password, foundUser.password)
            //             if (match) {
            //                 console.log("Good password...")
            //                 delete foundUser?.password
            //                 return foundUser
            //             } else {
            //                 console.log("Bad password...")
            //             }
            //         } else {
            //             console.log("User not found....")
            //         }
            //     } catch (error) {
            //         console.log(error)
            //     }
            //     return null;
            // }
            async authorize(creds) {
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            if (session?.user) {
                session.user.role = token.role
            }

            try {
                connectDb();
                const user = await User.findOne({ email: session?.user?.email })
                return user
            } catch (error) {
                return session
            }


        }
    },
    pages: { signIn: '/signin' },

} 