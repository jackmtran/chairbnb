// frontend/src/components/LoginFormPage/index.js
import { addChairs } from '../../store/chairs'
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css'

function MakePost() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [userId, setUserId] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);



useEffect(() => {
    dispatch(addChairs());
  }, [dispatch]);



  const handleSubmit = (e) => {
    e.preventDefault();


    const chairPost = ({
        name,
        price,
        address,
        city,
        state
    });



  }

  return (
<form className='post-form' onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" value={name} onChange={updateName}/>
    <input type="text" placeholder="Price" value={price} onChange={updatePrice}/>
    <input type="text" placeholder="Address" value={address} onChange={updateAddress}/>
    <input type="text" placeholder="City" value={city} onChange={updateCity}/>
    <input type="text" placeholder="State" value={state} onChange={updateState}/>
    <button type="submit" className='button'>Submit</button>
</form>
    )
}


export default MakePost;
