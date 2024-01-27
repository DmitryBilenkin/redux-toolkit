import { starWars } from '../store/starWarsSlice';
import { useSelector, useDispatch } from 'react-redux';

function StarWars() {     
  const quantityOfFacts = useSelector(state => state.starWars.quantityOfFacts);
  const facts = useSelector(state=>state.starWars.facts);
  const dispatch = useDispatch();

  const onInputHandler=(e)=>{  
    dispatch(starWars(e.target.value))      
  }

  const factsFiltered = facts.filter((_,ind) => ind < quantityOfFacts)

  return (
    <div className='star_wars__contsiner containers'>
        <h2>Star Wars Facts</h2>
        <input type='number' onChange={onInputHandler} maxLength={1} value={quantityOfFacts} min={1} max={5} style={{marginBottom: 10}}/>
        {factsFiltered.map((fact=><div style={{marginBottom: 10}}>{fact}</div>))}
    </div>
  )
}

export default StarWars;
