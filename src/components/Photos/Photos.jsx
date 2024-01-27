import { useSelector, useDispatch } from "react-redux";
import { addPhoto } from "../../store/photoSlice";
import { useRef } from "react";
import Photo from "../Photo/Photo";
import LastLoadingPhoto from "../LastLoading/LastLoadingPhoto";
import './Photos.css';

function Photos() {
    const { photos }  = useSelector(state=>state.photo);
    const dispatch = useDispatch();
    const inputFile = useRef();
    const reader = new FileReader();

    reader.onload=(e)=>{
      dispatch(addPhoto(e.target.result));
    }

    const onLoadPhotoHandler =(e)=>{     
        reader.readAsDataURL(e.target.files[0]);       
    } 

    const onBtnLoadHandler =()=>{
      inputFile.current.click()
    }

  return (
    <div className="photos__container containers">
        <h2>Photo Loader</h2>
        <div className='btn-load' onClick={onBtnLoadHandler}>Загрузить фото</div>       
        <input ref={inputFile} className='photos__input-load hidden' type="file" onChange={onLoadPhotoHandler} accept="image/*" />
        {photos.length > 1 && <LastLoadingPhoto url={photos[photos.length-2]} />}
        {photos.length !== 0 && 
          <div className="photos__view">
            {photos.map(url => <Photo url={url} />)}        
          </div>
        }                   
    </div>
  )
}

export default Photos;
