function Logout() {
    localStorage.clear();
    window.location = '/';
    return (
        <div>
            home
        </div>
    );
}
export default Logout;