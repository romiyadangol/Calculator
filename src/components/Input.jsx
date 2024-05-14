import '../assets/css/components/input.css';

function Input({value, onChange}){
    return(
        <div>
            <div>
                <input 
                className="input"   
                type="text"
                value={value} 
                onChange={(e)=>{
                    onChange(e.target.value);
                }}
                />
            </div>
        </div>
    );
}
export default Input;


