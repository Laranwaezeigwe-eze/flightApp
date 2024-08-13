import App from "../../App";
import HomePage from "../FlightHomePage/HomePage";

const ROUTES=[
    {
        path:'',
        key:'root',
        exact: true,
        element: <App/>
    },
    {
        path:'/home',
        key:'HOME',
        exact: true,
        element:<HomePage/>
    }
]
export default ROUTES