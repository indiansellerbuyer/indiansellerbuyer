import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useAuth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('user');
      if (auth) {
        try {
          const user = JSON.parse(auth);
          if (user && user._id) {
            setIsLogin(true);
          } else {
            setIsLogin(false);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          setIsLogin(false);
        }
      } else {
        setIsLogin(false);
      }
    };

    checkAuth();
  }, [router]);

  return isLogin;
}
