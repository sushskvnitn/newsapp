import React from "react";

const NewsItems =(props)=>{
      let {title ,description,imageUrl,newsUrl,author,date,source } = props;
    return (
      <div className=" my-3">
        <div className="card"  >
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger "> {source} </span>
          <img className="card-img-top" src={!imageUrl?"https://images.indianexpress.com/2021/10/IMG-1420.jpg":imageUrl}  alt="..." />
          <div className="card-body">
            
          <h5 className="card-title">{title}  </h5>

            <p className="card-text">
             { description}...
            </p>
            <p className="card-text"><small className="text-danger">Last updated by {!author?"unknown":author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank"
            rel="noreferrer" 
            className="btn btn-sm btn-dark">
              read more 
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;
