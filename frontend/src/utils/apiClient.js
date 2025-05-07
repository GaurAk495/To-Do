const BASE_URL = "https://to-do-igqy.onrender.com/";

const token = localStorage.getItem("token") || "";

export default async function apiClient(path, method = "GET", body = null) {
    const token = localStorage.getItem("token") || "";
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };

    const options = {
        method,
        headers,
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const res = await fetch(`${BASE_URL}${path}`, options);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.error || data.message || "API request failed");
    }

    return data;
}
