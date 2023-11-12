import { Route, useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Movie from "../Movies";

<Route path="/movie/Movie" element={Movie}>

</Route>

export default function MovieDetail()
{
    const { title } = useParams();
    const { state } = useLocation();

    console.log(title);
    console.log(state);

    return(title,state);
}