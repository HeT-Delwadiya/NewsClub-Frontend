import React from 'react';

function Post(props) {

       return (
              <div>
                     <div className="card mb-3 shadow theme-bg dark-text">
                            <div className="row">
                                   <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                                          <div className="card-img-top"><div className="news-card-image m-3 image-pos" style= {{backgroundImage: `url('${props.post.image}')`}}></div></div>
                                   </div>
                            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 card-body-space">
                                   <div className="card-body mx-3">
                                          <h5 className="card-title" style={{fontSize: "1.5rem", fontWeight: "700"}}>{props.post.title}</h5>
                                          <p className="card-text"><small className="">By {props.post.author}  |  {props.post.postedAt}</small></p>
                                          <p className="card-text" style={{fontWeight: "600"}}>{props.post.content}</p>
                                          <a href={props.post.readMore} target="_blank" className="btn sec-theme-bg rounded-3 text-white" style={{fontWeight:"500"}}>Read More</a>
                                   </div>
                            </div>
                            </div>
                     </div>
              </div>
       );
}

export default Post;