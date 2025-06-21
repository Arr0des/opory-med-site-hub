
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, User } from "lucide-react";

const Profile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-16">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin mx-auto" />
            <p className="mt-4">Загрузка данных профиля...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Личный кабинет
                </CardTitle>
                <CardDescription>
                  {user.name || user.email}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>{user.email}</p>
                  </div>
                  {user.phone && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Телефон</p>
                      <p>{user.phone}</p>
                    </div>
                  )}
                  <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
                    На главную
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Мои данные</CardTitle>
                <CardDescription>
                  Управление вашими данными и записями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="appointments" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="appointments">Мои записи</TabsTrigger>
                    <TabsTrigger value="history">История посещений</TabsTrigger>
                  </TabsList>
                  <TabsContent value="appointments">
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">У вас пока нет активных записей</p>
                      <Button className="mt-4" onClick={() => navigate("/")}>
                        Записаться на прием
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="history">
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">История посещений пуста</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
