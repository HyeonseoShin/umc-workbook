import { useNavigate } from "react-router-dom";

function Func()
{
    const navigate = useNavigate();
    
    const onClickImg = () => {
        navigate('/comment/id'), {
            stage : {'props'},
        };
    }

    return (
        <img src = {...} alt = {...} onClick={onClickImg}>
    
        </img>
    );
}

export default Func;