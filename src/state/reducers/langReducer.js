const reducer = (state="en", action) => {
       if(action.type=="language")
              return state=action.payload;
       else
              return state;
}

export default reducer;