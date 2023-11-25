import './StepItem.css';

function StepItem(props) {

    const dateFormated = new Date(props.date);

    const day = dateFormated.toLocaleString('ru-RU',{day: '2-digit'});
    const month = dateFormated.toLocaleString('ru-RU',{month: '2-digit'});
    const year = dateFormated.getFullYear();

    const onClickDeleteBtnHandler =() =>{
      props.deleteStep(props.index);
    }

  return (
    <div className='step-item'>
        <div className='step-item__elem'>{`${day}.${month}.${year}`}</div>
        <div className='step-item__elem'>{props.distance}</div>
        <div className='step-item__delete-btn' onClick={onClickDeleteBtnHandler}>✘</div>
    </div>
  )
}

export default StepItem
