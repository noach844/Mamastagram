export const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    window.location.pathname = '/';
} 

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.pathname = '/sign';
}

export const signUp = () => {
    
}
