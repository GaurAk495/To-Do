import { toast } from 'react-toastify'

const toastConfig = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        borderRadius: "12px",
        fontFamily: "Inter, sans-serif"
    }
};

export const handleSuccess = (msg = "Success!") => {
    toast.success(msg, toastConfig);
};

export const handleError = (msg = "Something went wrong") => {
    toast.error(msg, toastConfig);
};