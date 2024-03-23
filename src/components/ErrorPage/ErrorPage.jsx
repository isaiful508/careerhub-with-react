import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!!!! Something went wrong!</h2>
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;