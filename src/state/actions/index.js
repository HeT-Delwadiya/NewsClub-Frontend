export const changeLang = (lang) => {
       return (dispatch) => {
              dispatch({
                     type: "language",
                     payload: lang
              })
       } 
}

export const changeCategory = (category) => {
       return (dispatch) => {
              dispatch({
                     type: "category",
                     payload: category
              })
       } 
}