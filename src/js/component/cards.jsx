import React from "react";


export const Card = ({image, title, description}) => {

  return (

    <div className="card bg-dark card-responsive sm-mx-auto" style={{ width: '18rem' }}>
      <img src={image} className="card-img p-3 " alt="..." />
      <div className="card-body card-responsive">
        <h5 className="card-title text-center text-light">{title}</h5>
        <p className="card-body text-center text-light height-card ">{description}</p>
        <div className="card-footer d-flex justify-content-center pt-3">
        <a href="#" className="btn btn-primary">See in the wiki</a>
        </div>
      </div>
    </div>
  )


}

export default Card