<template>
  <div>
    <img src="https://th.bing.com/th/id/R2152b86152300100aa6a56db76d770a6?rik=JHfg9UcXzY9lGQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fSign-Up-Button-PNG-Transparent-Image.png&ehk=uOYqn%2bEhq9R1S0%2fHUOK%2bxVuMHervx8hAIHvFUXGwmko%3d&risl=&pid=ImgRaw" alt="">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components:{
     HelloWorld,
  }
};
</script>

<style>
img{
  width: 15%;
  margin-bottom:20px ;
  margin-top: 5%;
}
</style>