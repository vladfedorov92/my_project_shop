export const navItemArray = [
    {
        route: "/",
        title: "Home",
        forAll: true
    },
    {
        route: "customers",
        title: "Customers",
        forAdmin: true
    },
    {
        route: "products",
        title: "Products",
        forAll: true,
    },
    {
        route: "orders",
        title: "Orders",
        forUsers: true
    },
    {
        route: "shop_cart",
        title: "Shopping Cart",
        forUsers: true
    },
    {
        route: "login",
        title: "Login",
        noAuthenticated: true
    },
    {
        route: "logout",
        title: "Logout",
        forUsers: true
    },
    {
        route: "sign_up",
        title: "Sign Up",
        noAuthenticated: true
    }
];
export const navProductArray = [
    {
        route: "dairy",
        title: "Dairy products"
    },
    {
        route: "bread",
        title: "Bread products"
    },
    {
        route: "/",
        title: "Back to main menu"
    }
];
export const AUTH_USER = "auth_user";
export const PRODUCT_COLLECTION = "products";
export const CATEGORIES_COLLECTION = "categories";