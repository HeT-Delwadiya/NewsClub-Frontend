import React from "react";
import { useSelector } from "react-redux";
import { actionCreators } from "../../state/index";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

function Header(props) {

       const lang = useSelector(state => state.language);
       const category = useSelector(state => state.category);

       const dispatch = useDispatch();
       const {changeLang, changeCategory} = bindActionCreators(actionCreators, dispatch);

       return (
              <div className="mb-5">
                     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                     <div className="container px-4">
                            <a className="navbar-brand" href="/" style={{fontSize: "2rem", fontWeight: "700"}}>
                                   <span className="theme-text">News</span>Club
                            </a>
                            <button
                                   className="navbar-toggler"
                                   type="button"
                                   data-bs-toggle="collapse"
                                   data-bs-target="#navbarResponsive"
                                   aria-controls="navbarResponsive"
                                   aria-expanded="false"
                                   aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                   <ul className="navbar-nav ms-auto">
                                          <li className="nav-item m-2">
                                          <select className="form-select" value={lang} onChange={e => changeLang(e.target.value)} aria-label="Default select example">
                                                 <option value="en">English</option>
                                                 <option value="hi">Hindi</option>
                                          </select>
                                          </li>
                                          <li className="nav-item m-2">
                                          <select className="form-select" value={category} onChange={e => changeCategory(e.target.value)} aria-label="Default select example">
                                                 <option value="">All Categories</option>
                                                 <option value="national">National</option>
                                                 <option value="business">Business</option>
                                                 <option value="sports">Sports</option>
                                                 <option value="world">World</option>
                                                 <option value="politics">Politics</option>
                                                 <option value="technology">Technology</option>
                                                 <option value="startup">Startup</option>
                                                 <option value="entertainment">Entertainment</option>
                                                 <option value="miscellaneous">Miscellaneous</option>
                                                 <option value="hatke">Hatke</option>
                                                 <option value="science">Science</option>
                                                 <option value="automobile">AutoMobile</option>
                                          </select>
                                          </li>
                                          <li className="nav-item ms-4">
                                          <a className="nav-link text-white" href="https://github.com/HeT-Delwadiya" target="_blank" style={{fontSize: "1.5rem", fontWeight: "600"}}>
                                                 About
                                          </a>
                                          </li>
                                   </ul>
                            </div>
                     </div>
                     </nav>
              </div>
       );
}

export default Header;
