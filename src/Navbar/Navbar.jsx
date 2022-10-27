import './Navbar.scss';

const Navbar = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
        <nav className="navbar navbar-dark fixed-top">
            <div className="container-fluid">
            <a className="navbar-brand">Moviehunt</a>
            <form onSubmit={handleSubmit} className="search-form d-flex align-items-center">
                <input 
                    className="search-field form-control border-0 rounded-0 me-2" 
                    type="search" 
                    placeholder="Search movies" 
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                />
                <button 
                    className="search-btn d-flex align-items-center justify-content-center" 
                    onClick={() => props.triggerSearch(props.search)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
            </div>
        </nav>
        </>
    )
}

export default Navbar;