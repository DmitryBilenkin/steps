import { useState } from 'react';
import FormSteps from './components/FormSteps/FormSteps';
import StepsList from './components/StepsList/StepsList';
import './App.css';

function App() {
  const [savedFormData, setSavedFormData] = useState([]);

  const saveFormData = (date, distance)=>{
    const sameDateElement = savedFormData.findIndex(step => step.date===date);

    if(sameDateElement === -1){        
      setSavedFormData([
        {
          date: date,
          distance: +distance
        }, ...savedFormData
      ]);
    } else {
        savedFormData[sameDateElement].distance = +savedFormData[sameDateElement].distance + +distance;
        setSavedFormData([...savedFormData]);
    };  
  };

  const deleteStep = (index) => {
    savedFormData.splice(index, 1)
    setSavedFormData([...savedFormData]);
  }


  return (
    <div className="App">
      <FormSteps onSaveFormData={saveFormData}/>
      <StepsList savedFormData={savedFormData} deleteStep={deleteStep}/>
    </div>
  );
}

export default App;
