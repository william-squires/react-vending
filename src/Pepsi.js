import { Link } from "react-router-dom";

function Pepsi() {
    return (
        <div>
            <h1>Pepsi</h1>
            <a href="https://www.youtube.com/watch?v=z54MpfR3XE4">Pepsi theme song</a>
            <br/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Pepsi;