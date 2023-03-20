import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedItem } from '../redux/noteapp/noteappSlice';
import { deleteNotesAppAsync, getNotesAppAsync } from '../redux/noteapp/service';


function NoteList() {
  const allNoteList = useSelector((state) => state.notesapp.items);
  const filterText = useSelector((state) => state.notesapp.filterText);
  const dispatch = useDispatch ()

  useEffect(()=>{
    dispatch(getNotesAppAsync())
  }, [dispatch])
  

  const filtered = allNoteList.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase());
    });
  });

  const handleDelete = async (id) => {
    await dispatch(deleteNotesAppAsync(id))
  }
const handleUpdate = (item) => {
    dispatch(setSelectedItem(item))
} 
  
  useEffect(()=>{
    dispatch(getNotesAppAsync())
  }, [dispatch])
  
  return (
    <div className='note'>
      {filtered.map((item) => (
      <div key={item?.id} className='note-card' style={{backgroundColor: `#${item?.color}`}}>
        <h4>{item?.title}</h4>
        <p>{item?.note}</p>
        <div className='button-icon'> 
          <button 
            style={{width:'30px', height:'20px', margin:'5px'}}
            onClick={() => handleDelete(item?.id)}
          >Sil</button>
          <button 
            style={{width:'65px', height:'20px', margin:'5px'}}
            onClick={() => handleUpdate(item)}
          >Düzenle</button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default NoteList
