import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props);
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img src={photo.src.landscape} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

//<section className="Photos">
//{props.photos.map((photo, index) => (
//<div key={index}>
//<img src={photo.src.landscape} alt={photo.alt || "Photo"} />
//</div>
//))}
//</section>;
