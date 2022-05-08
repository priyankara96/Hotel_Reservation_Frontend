import React from 'react'
import './Card.css'

function Card({title,imageUrl,body}) {
  return (
      <div>
          <td>
              <tr>
                  <th>

            
    <div className='card-container'>
      <div className="image-container">
        <img src={imageUrl} lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>

<div className='card-container'>
      <div className="image-container">
        <img src="https://www.srilankatrips.com/uploads/1509535407.gif" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>
</th>

<th>
    <div className='card-container'>
      <div className="image-container">
        <img src="https://aff.bstatic.com/images/hotel/840x460/132/132511144.jpg" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>

<div className='card-container'>
      <div className="image-container">
        <img src="http://www.srilankatraveller.com/img_propertyimages/142_688.gif" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>

    

    </th>
    <th>
        <div className='card-container'>
      <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxAjW94HjlgWOeYOu8uqJhiemCANAZtF8XLeHzM7TbZ9LWrQqQxN3oRfGWBRnlu0gO0c&usqp=CAU" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>

<div className='card-container'>
      <div className="image-container">
        <img src="https://www.cocoroyalbeach.com/images/rooms/room4.jpg" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>
    </th>
    <th>
        <div className='card-container'>
      <div className="image-container">
        <img src="https://www.travelplusstyle.com/wp-content/uploads/2014/06/bedroom-villa-ka-3.jpg" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>

<div className='card-container'>
      <div className="image-container">
        <img src="https://i.pinimg.com/originals/6f/29/51/6f29514b34a405ca7667ba0905b561b4.jpg" lat=" " />
      </div>
       <div className="card-content">
            <div className="card-title">
         <h3>{title}</h3>
      </div>
       <div className="card-body">
       <p>{body}</p>
       </div>
       </div>
      
       <div className="btn">
           <button>
               <a>
                   View More
               </a>
           </button>
       </div>
    </div>
    </th>
  </tr>
 </td>
</div>

    
  )
}

export default Card