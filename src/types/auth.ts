
export interface AuthUser {
  id: string
  email: string
  user_metadata?: {
    name?: string
    phone?: string
  }
}

export interface AuthContextType {
  session: any | null
  user: AuthUser | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string, phone: string) => Promise<void>
  signOut: () => Promise<void>
}
