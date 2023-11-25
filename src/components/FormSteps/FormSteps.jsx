import { useState } from "react";
import './FormSteps.css';

function FormSteps(props) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');


    const dateChangeHandler = (date) =>{
        setDate(date.target.value);
    };

    const distanceChangeHandler =(distance)=>{
        setDistance(distance.target.value);
    };

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        props.onSaveFormData(date, distance)       

        setDate('');
        setDistance('');
};

  return (
    <form className='stepsform' onSubmit={formSubmitHandler}>
        <div className='stepsform__control'>
            <label>Дата(ДД.ММ.ГГГГ)</label>
            <input className='stepsform__control-item' onChange={dateChangeHandler} name='date' type='date' value={date} required/>
        </div>
        <div className='stepsform__control'>
            <label>Пройдено км</label>      
            <input className='stepsform__control-item' onChange={distanceChangeHandler} name='distance' type='number' step='0.1' min='0.1' placeholder='0,0' value={distance} required/>
        </div>
        <button className='stepsform__btn' type='submit'>ОК</button>
    </form>
  )
}

export default FormSteps;
