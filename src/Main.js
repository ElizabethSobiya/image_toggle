import React, {useEffect, useState} from 'react'
import './Main.css'

function Main() {

 const [users, setUsers] = useState([]);

 const fetchUsers = () => {
    fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        setUsers(data)
    })
 }

 useEffect(() => {
    fetchUsers()
 },[])


let container = document.getElementById('container')
var span = document.getElementsByClassName("close")[0];
let button = document.getElementById('btn')

function modal() {
   container.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
  function span(){
   container.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 Window.onClick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
// const getContent = () => {
//    container.classList.add('img-details');
// }
  
// function getContent(e){
//    e.preventDefault();
//    if(e.target.classList.contains('img-details')){
//          let imgItem = e.target.parentElement.parentElement;
//          console.log(imgItem);
//          fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts=${imgItem.dataset.id}')
//    }

// }

  return (
    <>
    <div className='container'>
        {users.map(user => (
      <div className='mainWrapper'>  
          <div className="top">
            <div className="img">
            <img  src={user.thumbnail.small} alt=''/>
            
            </div>
            <button id='btn' onClick={modal}>Learn more</button>
          </div>
          <div className="bottom">
  <div className="dot">
  <p className='dot'><span className='blue'></span>  <span className='yellow'></span></p>
  </div>
  <div className="title">
  <h2 className='head'>{user.title}</h2>
  </div>
  <div className="dec">
  <p className='content'>{user.content}</p>
  </div>
  <div className="footer">
  <p className='name'>{user.author.name} - <span>{user.author.role}</span></p>
  <p>{user.date}</p>
  </div>
          </div>
       </div>
       ))}
    </div>
    {users.map(user => (
    <div className="img-details" id="container">
      <span className='close' onClick={span} id='close'><i className='fa fa-times'></i></span>
      <div className='top'>
      <img src={user.thumbnail.large} alt="" />
      <p className='content'>{user.content}</p>
      </div>
      <div className="avatar">
         <img  src={user.author.avatar} alt="" />
         <p className='name'>{user.author.name} - <span>{user.author.role}</span></p>
      </div> 
    </div>
     ))}
    </>
  )
}

export default Main

