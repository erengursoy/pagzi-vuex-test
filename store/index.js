

 export const state = () =>  ({
userName:'eren',
userSurname:'gürsoy'
});
 export const getters = {
   newName(state){
  return state.userName +' '+ state.userSurname ;

},
 };
 export const mutations ={
   setUsername(state, name)
   {
     state.userName=name
   }

 };
 export const actions = {
   updateUserName({commit}, name)
   {
     setTimeout(()=>{
       commit('setUsername', name);
       }, 1000
     )

   }

 };


