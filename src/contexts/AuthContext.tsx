import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Session, User } from '@supabase/supabase-js'
import { useToast } from '@/components/ui/use-toast'

type AuthContextType = {
  session: Session | null
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string, phone: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

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

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) {
        throw error
      }
      
      toast({
        title: "Успешно!",
        description: "Вы успешно вошли в систему",
      })
    } catch (error: any) {
      console.error(error)
      toast({
        title: "Ошибка входа",
        description: error?.message || "Проверьте данные и попробуйте снова",
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, name: string, phone: string) => {
    try {
      setLoading(true)
      
      // Регистрация пользователя
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            phone,
          }
        }
      })
      
      if (error) {
        throw error
      }
      
      toast({
        title: "Успешно!",
        description: "Вы успешно зарегистрировались. Проверьте почту для подтверждения аккаунта.",
      })
      
      return data
    } catch (error: any) {
      console.error(error)
      toast({
        title: "Ошибка регистрации",
        description: error?.message || "Проверьте данные и попробуйте снова",
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        throw error
      }
      
      toast({
        title: "Выход выполнен",
        description: "Вы успешно вышли из системы",
      })
    } catch (error: any) {
      console.error(error)
      toast({
        title: "Ошибка",
        description: error?.message || "Не удалось выйти из системы",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const value = {
    session,
    user,
    loading,
    signIn,
    signUp,
    signOut,
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
