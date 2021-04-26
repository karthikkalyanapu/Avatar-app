import React from 'react';

const AvatarList = (props)=> {
  return (
    <div className="avatar ma4 bg-light-purple dib pa4 grow tc">
              <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
              <h1 >{props.name}</h1>
              <p>{props.work}</p>
          </div>
  )
}
 export default AvatarList;