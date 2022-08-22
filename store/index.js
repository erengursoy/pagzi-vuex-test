

 export const state = () =>  ({
username:'eren',
message:'hello world'
});
 export const getters = {
newMessage(state){
  return state.username +' '+ state.message ;

},
 };
 export const mutations ={
   setUsername(state, name)
   {
     state.username=name
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


