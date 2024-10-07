import SubmitButton from "./SubmitButton";
function UserForm(){
    return(
        <div>
            <form>
                <WeightInput />
                <HeightInput />
                <SubmitButton />
            </form>
        </div>
    )
}

function WeightInput(){
    return(
        <div className="weight-input">
            <label>Weight:</label>
            <input required type="number" />
        </div>
    )
}

function HeightInput(){
    return(
        <div className="height-input">
            <label>Height</label>
            <input required type="number" />
        </div>
    )
}



export default UserForm;