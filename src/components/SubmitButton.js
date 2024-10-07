function handleClick(event){
event.preventDefault();
}



function SubmitButton(){
    return <button className="submit-btn" onClick={handleClick}>Calculate BMI</button>
}


export default SubmitButton;