import '../assets/css/components/button.css';

function Button({ value, onClick, style }){
  return (
    <div className="btn-box">
    <button 
    style={style}
    className="button" 
    onClick={onClick}>
      {value}
    </button>
    </div>
  );
}
export default Button;
