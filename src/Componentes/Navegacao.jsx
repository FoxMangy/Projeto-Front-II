import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export function Navegacao() {
    return (
        <header className="flex items-center gap-6 bg-surface text-maintext p-4 border-b-2 border-border">
            <img src={logo} alt="Logo" className="h-14 w-34" />
            <div className="flex gap-8 self-center text-xl font-semibold">
                <NavLink to="/" isactive ClassName="text-primary">
                    <button className=" relative pb-2 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full">
                        Página Inicial
                    </button>
                </NavLink>

                <NavLink to="/filmes" activeClassName="text-primary">
                    <button className=" relative pb-2 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full">
                        Filmes
                    </button>
                </NavLink>

                <NavLink to="/series" activeClassName="text-primary">
                    <button className=" relative pb-2 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full">
                        Series
                    </button>
                </NavLink>

                <NavLink to="/jogos" activeClassName="text-primary">
                    <button className=" relative pb-2 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full">
                        Jogos
                    </button>
                </NavLink>

                <NavLink to="/categorias" activeClassName="text-primary">
                    <button className=" relative pb-2 hover:text-primary transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full">
                        Categorias
                    </button>
                </NavLink>
            </div>
        </header>
    )
}