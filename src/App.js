import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/card/Card";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState([]);

    const getUser = async () => {
        // Till the data is fetch using API
        // the Loading page will show.
        setLoading(true);
        const {
            data: { results },
        } = await axios("https://randomuser.me/api");

        // After fetching data stored it in and localStorage & userDetails state.
        localStorage.setItem("User", JSON.stringify(results));
        setUserDetails(results);

        // Closed the loading page
        setLoading(false);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="App">
            <h1 className="text-light">Random User Generator</h1>
            {loading ? (
                <h4 className="text-light">Loading...</h4>
            ) : (
                <Card data={userDetails} />
            )}
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => getUser()}
            >
                Get User
            </button>
        </div>
    );
}

export default App;
