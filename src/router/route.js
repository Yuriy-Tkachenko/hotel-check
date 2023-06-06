import LogIn from "../components/pages/log-in/log-in";
import Order from "../components/pages/order/order";

export const privateRoutes = [
  { path: '/order', component: <Order />, exact: true }
]

export const publicRoutes = [
  { path: '/login', component: <LogIn />, exact: true }
]