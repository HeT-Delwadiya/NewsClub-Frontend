import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Post from './components/Post';
import { getPosts, getMorePosts } from './helpers/coreapis';
import { useSelector } from "react-redux";

function Home(props) {

       const [posts, setPosts] = useState([]);
       const [error, setError] = useState(false);
       const [isLoading, setIsLoading] = useState(false);
       const [isMoreLoading, setIsMoreLoading] = useState(false);
       const [newsOffset, setNewsOffset] = useState("");
       const [visible, setVisible] = useState(false);

       const lang = useSelector(state => state.language);
       const category = useSelector(state => state.category);

       const fetchPosts = () => {
              setIsLoading(true);
              getPosts({lang:lang, category:category})
              .then(data => {
                     if(data.err)
                            setError(data.err)
                     else {
                            setPosts(data.posts);
                            setNewsOffset(data.news_offset);
                            setIsLoading(false);
                     }
              })
              .catch(err => console.log(err));
       }

       const fetchMorePosts = (event) => {
              event.preventDefault();
              setIsMoreLoading(true);
              getMorePosts({lang:lang, category:category, news_offset:newsOffset})
              .then(data => {
                     if(data.err)
                            setError(data.err)
                     else {
                            setPosts((currentPosts) => currentPosts.concat([ ...data.posts]));
                            setNewsOffset(data.news_offset);
                            setIsMoreLoading(false);
                     }
              })
              .catch(err => console.log(err));
       }

       useEffect(() => {
              fetchPosts();
       }, [lang, category]);

       const loadingMsg = () => {
              return <div className="custom-loading" style={{display: isLoading ? "" : "none"}}>
                     <ul className="position-absolute top-50 start-50 mt-5">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                     </ul>
              </div>
       }

       const errorMsg = () => {
              return (
                     <div className="container mt-3">
                            <div className="alert alert-danger text-center" style={{display: error ? "" : "none"}}>
                                   {error}
                            </div>
                     </div>
              );
       }

       const toggleVisible = () => {
              const scrolled = document.documentElement.scrollTop;
              if (scrolled > 300){
                     setVisible(true)
              } 
              else if (scrolled <= 300){
                     setVisible(false)
              }
       }

       const scrollToTop = () =>{
              window.scrollTo({
                     top: 0, 
                     behavior: 'smooth'
              });
       }
            
       window.addEventListener('scroll', toggleVisible);

       return (<>
              <Header />
                     <div className="container pt-5">
                     {errorMsg()}
                     <div className="position-fixed top-30 start-50 translate-middle ps-5 pt-5 mt-5" style={{zIndex: "100"}}>{loadingMsg()}</div>
                            <div className="">
                            {posts?.map((post, index) => {
                                   return <Post key={index} post={post} />
                            })}
                            </div>
                            <div className="mx-auto text-center">
                                   <button onClick={fetchMorePosts} className={isMoreLoading ? "btn theme-bg text-dark rounded-3 text-center mt-4 mb-5 disabled" : "btn theme-bg text-dark rounded-3 text-center mt-4 mb-5"} style={{fontWeight:"600"}}>{isMoreLoading ? "Loading..." : "Load More"}</button>
                            </div>
                     </div>
                     <div className="text-end">
                            <button onClick={scrollToTop} className="btn theme-bg text-dark rounded-3 text-center position-fixed bottom-0 end-0 mb-5 me-5 shadow-lg border border-dark" style={{fontWeight:"600", display: visible? "":"none"}}><i class="fa-solid fa-angle-up"></i></button>
                     </div>
              <Footer />
              </>
       );
}

export default Home;