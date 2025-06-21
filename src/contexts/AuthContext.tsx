
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Session, User } from '@supabase/supabase-js'
import { useToast } from '@/components/ui/use-toast'
import { useAuthActions } from '@/hooks/useAuthActions'
import { AuthContextType } from '@/types/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()
  const { signIn, signUp, signOut } = useAuthActions()

  useEffect(() => {
    const setData = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
        toast({
          title: "Ошибка",
          description: "Не удалось получить сессию",
          variant: "destructive",
        })
      } else {
        setSession(session)
        setUser(session?.user ?? null)
      }
      setLoading(false)
    }
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    setData()

    return () => {
      subscription.unsubscribe()
    }
  }, [toast])

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      await signIn(email, password)
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (email: string, password: string, name: string, phone: string) => {
    setLoading(true)
    try {
      return await signUp(email, password, name, phone)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
    } finally {
      setLoading(false)
    }
  }

  const value = {
    session,
    user,
    loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
