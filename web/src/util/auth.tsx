export function useAuth() {
    const user = localStorage.getItem('@Houpa:user');
    if (!user) {
      return null;
    }
  
    return user;
}