import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNotesAppAsync, updateNotesAppAsync } from '../redux/noteapp/service';

function Form() {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.notesapp.selectedItem);
  const [form, setForm] = useState({
    id:"",
    title:"",
    note:"",
    color:'E96479',
  });

  useEffect(()=>{
    console.log(form)
  },[form])

  useEffect(()=>{
    if(selectedItem?.id) {
      const lastSelectedItem = {
        id: selectedItem.id,
        title: selectedItem.title,
        note: selectedItem.note,
        color: selectedItem.color
      }
      setForm(lastSelectedItem);
    }
  },[selectedItem]);

  const handleChange = (key, value) => {
    setForm((prev) => ({...prev, [key]:value}))
  }

  const handleAdd = () => {
    dispatch(addNotesAppAsync(form))
    setForm({
      title:"",
      note:"",
      color:'E96479',
    });
  };

  const handleUpdateData = () => {
    const formData = form;
    dispatch(updateNotesAppAsync(formData))
  };

  return (
    <div>
        <label htmlFor="title">Your Title</label> <br />
        <input 
          type='text' 
          name='title' 
          placeholder='Enter your note title here'
          value={form?.title}
          onChange={(e) => handleChange('title', e.target.value)}
        /><br /><br />
        <label htmlFor="note">Your Note</label> <br />
        <textarea
          type='text-area' 
          name='note' 
          placeholder='Enter your note here' 
          style={{backgroundColor:`#${form?.color}`, color:'white', width:'170px', height:'150px'}}
          value={form?.note}
          onChange={(e) => handleChange('note', e.target.value)}
        />
        <br />
        <button 
          onClick={() => handleChange('color','E96479')}
          className='button' 
          style={{backgroundColor:'#E96479'}} 
        />
        <button
          onClick={() => handleChange('color','BE6DB7')} 
          className='button' 
          style={{backgroundColor:'#BE6DB7'}} />
        <button
          onClick={() => handleChange('color','E7B10A')} 
          className='button' 
          style={{backgroundColor:'#E7B10A'}} />
        <button
          onClick={() => handleChange('color','3A98B9')}
          className='button' 
          style={{backgroundColor:'#3A98B9'}} />
        <button
          onClick={() => handleChange('color','5D9C59')}
          className='button' 
          style={{backgroundColor:'#5D9C59'}} />
        <br />
        {form.id 
        ? (<button style={{margin:'5px'}} onClick={handleUpdateData}>Update</button>)
        : (<button style={{margin:'5px'}} onClick={handleUpdateData} disabled>Update</button>)}
        <button style={{margin:'5px'}} onClick={handleAdd}>Send</button>
        

    </div>
  )
}

export default Form

