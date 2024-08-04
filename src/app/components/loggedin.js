"use client"
import { useRouter } from "next/navigation";
export default function Loggedin(link){
    const router = useRouter();
    useEffect(()=>{
        const auth = localStorage.getItem('auth');
        if(!auth){
            router.push('/login');
        }
    })
    return null;
}