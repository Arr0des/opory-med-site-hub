
import { supabase } from '@/lib/supabase'
import { useToast } from '@/components/ui/use-toast'

export const useAuthActions = () => {
  const { toast } = useToast()

  const signIn = async (email: string, password: string) => {
    try {
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
    }
  }

  const signUp = async (email: string, password: string, name: string, phone: string) => {
    try {
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
    }
  }

  const signOut = async () => {
    try {
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
    }
  }

  return {
    signIn,
    signUp,
    signOut,
  }
}
