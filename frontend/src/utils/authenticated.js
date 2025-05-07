import apiClient from "./apiClient";

export const isAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const result = await apiClient('/api/auth')

        const { success, message } = result;
        if (success) {
            return true;
        } else {
            console.error("Authentication failed:", message); // Replace or wrap with `handleError()` if defined
            return false;
        }

    } catch (error) {
        console.error("Error during authentication check:", error);
        return false;
    }
};
