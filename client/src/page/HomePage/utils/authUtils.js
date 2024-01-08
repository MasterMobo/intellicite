const isLoggedIn = () => {
    return (
        localStorage.getItem("token") !== null ||
        localStorage.getItem("user") !== null
    );
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getToken = () => {
    return localStorage.getItem("token");
};

export { isLoggedIn, getUser, getToken };
