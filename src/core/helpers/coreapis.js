export const getPosts = (data) => {
       return fetch("https://newsclub-backend.herokuapp.com/api/posts",{
              method: "POST",
              headers: {
                     "content-type": "application/json",
                     "Accept": "application/json"
              },
              body: JSON.stringify(data)
       })
       .then(response => response.json())
       .catch(err => console.log(err))
}

export const getMorePosts = (data) => {
       return fetch("https://newsclub-backend.herokuapp.com/api/posts/more",{
              method: "POST",
              headers: {
                     "content-type": "application/json",
                     "Accept": "application/json"
              },
              body: JSON.stringify(data)
       })
       .then(response => response.json())
       .catch(err => console.log(err))
}