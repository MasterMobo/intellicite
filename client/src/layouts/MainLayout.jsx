import NavBar from "./NavBar";
import MenuContext from "./Context";
import { useContext } from "react";

function MainLayout({ children }) {
    const { isOpenMenu, toggleMenu  } = useContext(MenuContext);
    return ( 
        <div className="row w-full justify-between" style={{ margin: 0 }}>
            <div className={isOpenMenu ? 'col-9' : 'col-12'}>
            <div className="main">
            {children}
            </div>
            </div>
            <div className={isOpenMenu ? 'col-3' : ''}>
                {
                    isOpenMenu ? (
                        <NavBar isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
                    ) : (
                            <div className="icon icon-top"

                                onClick={() => toggleMenu()}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    )
               }
            </div>
            <div className="footer">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </div>
     );
}

export default MainLayout;