"use client"
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ isSignedIn: false, signIn: () => { }, signOut: () => { } });

// Auth Provider
export function AuthProvider({ children }: { children: ReactNode }) {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const storedStatus = localStorage.getItem('isSignedIn') === 'true';
        setIsSignedIn(storedStatus);
    }, []);

    const signIn = () => {
        setIsSignedIn(true);
        localStorage.setItem('isSignedIn', 'true');
    };

    const signOut = () => {
        setIsSignedIn(false);
        localStorage.removeItem('isSignedIn');
    };

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}