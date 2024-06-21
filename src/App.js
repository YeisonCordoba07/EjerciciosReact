import './App.css';
import { useFetch } from './hook/useFetch';

function App() {


    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    console.log(error);
    return (
        <div className="App">
            <h1>Ejercicio sobre consumir APIs</h1>
            <ul>
                {error !== null && <li>Error: {error.menssage}</li>}
                {loading && <div>Loading ...</div>}
                {!loading && !error &&          
                    data?.map(user => {
                        return (<li key={user.id}>{user.name}</li>);
                    })
                }

            </ul>
        </div>
    );
}

export default App;
