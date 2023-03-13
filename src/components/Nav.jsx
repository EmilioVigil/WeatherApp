import { SearchBar } from "./SearchBar"
import '../style/Nav.css'
export function Nav({ onSearch }) {
    return (
        <nav className="nav-container">
            <div className="nav-title">
                <h3>Weather App</h3>
            </div>
            <div className="nav-onSearch">
                <SearchBar onSearch={onSearch} />

            </div>
        </nav>
    )
}