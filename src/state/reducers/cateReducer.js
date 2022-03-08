const reducer = (state="", action) => {
       if(action.type=="category")
              return state=action.payload;
       else
              return state;
}

export default reducer;