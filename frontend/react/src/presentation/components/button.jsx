import { useNavigate } from "react-router";

export default function Button({ children, to, onClick, className }) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick();
        }   
      };
    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
}