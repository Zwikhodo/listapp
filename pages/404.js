import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();
    useEffect (() =>{
        setTimeout(() => {
            router.push('/');
        }, 3000)
        
    }, [])
    return (  
        <div className="not-found">
            <h1>
                Oooooops....
            </h1>
            <h2>That Page Cannot Be Found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default Error;