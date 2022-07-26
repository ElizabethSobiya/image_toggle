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

//  function getContent(e){
//    e.preventDefault();
//    if(e.tar)
//  }
const container = () => {
   document.getElementById('container');
 }

const getContent = () => {
   container.classList.add('img-details');
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
            <div className="img" onClick = {getContent}>
            <img  src={user.thumbnail.small} alt=''/>
            <p className='learn'>Learn more</p>
            </div>
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
      <button type='button' className='closeBtn'><i className='fa fa-times'></i></button>
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
