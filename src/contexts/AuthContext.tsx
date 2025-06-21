
import { createContext, useContext, useState, ReactNode } from 'react'
import { AuthContextType, AuthUser } from '@/types/auth'
import { useToast } from '@/components/ui/use-toast'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Имитация входа - в реальном приложении здесь был бы API вызов
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: AuthUser = {
        id: '1',
        email,
        name: 'Тестовый пользователь',
        phone: '+7 (XXX) XXX-XX-XX'
      }
      
      setUser(mockUser)
      localStorage.setItem('auth_user', JSON.stringify(mockUser))
      
      toast({
        title: "Успешно!",
        description: "Вы успешно вошли в систему",
      })
    } catch (error) {
      toast({
        title: "Ошибка входа",
        description: "Проверьте данные и попробуйте снова",
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, name: string, phone: string) => {
    setLoading(true)
    try {
      // Имитация регистрации - в реальном приложении здесь был бы API вызов
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: AuthUser = {
        id: '1',
        email,
        name,
        phone
      }
      
      setUser(mockUser)
      localStorage.setItem('auth_user', JSON.stringify(mockUser))
      
      toast({
        title: "Успешно!",
        description: "Вы успешно зарегистрировались",
      })
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Проверьте данные и попробуйте снова",
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
    toast({
      title: "Выход выполнен",
      description: "Вы успешно вышли из системы",
    })
  }

  // При инициализации проверяем localStorage
  useState(() => {
    const savedUser = localStorage.getItem('auth_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem('auth_user')
      }
    }
  })

  const value = {
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
