import './mainheader.css';
function MainHeader({isAuthenticated, onLogout}){
    return(
        <section className="mainheader">
            <h2 className="brandName">Demo React App</h2>
            <ul className="navlink">
                <li className="navitem">User</li>
                <li className="navitem">Admin</li>
                {isAuthenticated && (
                    <button className="navitem logoutBtn" onClick={onLogout}>Logout</button>
                )}
            </ul>
        </section>
    )
}
export default MainHeader;