"use client";

import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
    // const router = useRouter();
    // const { isLoaded, sessionId } = useAuth();

    // useEffect(() => {
    //     if (isLoaded && sessionId) {
    //         router.push('/forum');
    //     }
    // }, [isLoaded, sessionId, router]);

    return (
        <main className="flex h-screen w-full items-center justify-center">
            <SignUp />
        </main>
    );
};

export default SignUpPage;