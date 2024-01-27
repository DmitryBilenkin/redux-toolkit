import './Photo.css'

function Photo(props) {
  return (
    <div className="photo">
         <img className='photo__img'src={props.url} alt='img'/>        
    </div>    
  )
}

export default Photo;
