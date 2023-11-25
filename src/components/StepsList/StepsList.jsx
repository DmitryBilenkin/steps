import StepItem from "../StepItem/StepItem";
import './StepsList.css';

function StepsList(props) {
    const sortSaveFormData = props.savedFormData.sort((a,b)=>new Date(b.date) - new Date(a.date));
  return (
    <>
        <div className='namesOfColumns'>
          <div>Дата(ДД.ММ.ГГГГ)</div>
          <div>Пройдено км</div>
          <div>Действия</div>
        </div>

        <div className='step-container'>       
            {sortSaveFormData.map((event, index) => <StepItem index={index} date={event.date} distance={event.distance} key={Math.random()} deleteStep={props.deleteStep}/>)}
        </div>
        </>

  );
};

export default StepsList
