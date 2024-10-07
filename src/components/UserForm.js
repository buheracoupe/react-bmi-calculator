import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import { useState } from "react";

function UserForm(){
    const { register, handleSubmit } = useForm();
    const [bmiValue, setBmiValue] = useState("");
    const [bmiStatus, setBmiStatus] = useState("");

    const onSubmit = (data) => {
        const {weight, height} = data;
        const bmi = Math.round(weight / Math.pow(height, 2));
        console.log(bmi);
        setBmiValue(bmi);
        // get and set bmi status
        if (bmi < 18.5) {
            setBmiStatus("underweight");
          } else if (bmi >= 18.5 && bmi < 25) {
            setBmiStatus("normal weight"); 
        } else if (bmi >= 25 && bmi < 30) {
            setBmiStatus("overweight");
          } else   
         {
         setBmiStatus("obese");
          }
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <WeightInput name="weight" register={register} />
                <HeightInput name="height" register={register} />
                <SubmitButton />
                <DisplayResults status={bmiStatus} state={bmiValue} />
            </form>
        </div>
    )
}

function WeightInput({name, register}){
    return(
        <div className="weight-input">
            <label>Weight:</label>
            <input step="0.01" name={name} {...register(name)} required type="number" />
        </div>
    )
}

function HeightInput({name, register}){
    return(
        <div className="height-input">
            <label>Height</label>
            <input step="0.01" {...register(name)} required type="number" />
        </div>
    )
}

function DisplayResults(props){
    return(
        <div className="results-wrapper">
           <div className="display-headers">
            <p>BMI</p>
            <p>{props.state}</p>
           </div>
           <div className="display-results">
            <p>Result and Evaluation</p>
            <p>{props.status}</p>
           </div>
        </div>
    )
}
// build logic fo the BMI and figure out how to display results
export default UserForm;