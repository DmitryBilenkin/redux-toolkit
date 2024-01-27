import './LastLoadingPhoto.css'

function LastLoadingPhoto(props) {
  return (
    <>
    <h3>Последнее загруженное фото</h3>
    <div className="last-photo">        
        <img className='last-photo__img'src={props.url} alt='last-img'/>        
    </div> 
    </>
    
  )
}

export default LastLoadingPhoto;
