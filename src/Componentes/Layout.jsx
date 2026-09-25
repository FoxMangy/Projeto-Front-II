import { Navegacao } from "./Navegacao";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <Navegacao />
            <main>
                <Outlet />
            </main>
        </>
    )
}