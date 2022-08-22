<!-- Please remove this file from your project -->
<template>
 <div>
  <p class="text-center py-10">{{newName}}</p>
   <div  class="flex  justify-center">
     <input type="text" class="w-1/2 bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500" v-model="name">

     <div class="">
       <button type="button"  @click="updateName" class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">
         Update Name
       </button>

     </div>
   </div>


   </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'NuxtTutorial',
  data(){
    return {
      name:'eren',
    }

  },
  computed: {
    ...mapState([
      "userName","userSurname"
    ]),
    ...mapGetters([
     "newName"
    ]),
  },
  methods:{
 ...mapActions([
   'updateUserName',
 ]),
    updateName(){
    this.updateUserName(this.name)
    },
  }

}
</script>
