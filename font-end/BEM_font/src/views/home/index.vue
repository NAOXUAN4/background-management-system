<template>
  <div class="home-main">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'main'
    }
  }
}
</script>

<style scoped lang="scss">
.home-main {
  border-radius: 6px;
  border: #737373 solid 2px;
  width: 100%;
  height: 100%;
  color: blue;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a0a2b3;
}


h1 {
  color: rgb(24, 124, 238);
  align-items: center;
  justify-content: center;
}


</style>