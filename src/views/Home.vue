<template>
  <div>
    <img src="../assets/ansible-hexagon.png" class="spin d-inline-block" />
    <br />
    <img
      src="../assets/logo.png"
      style="width: 500px"
      class="d-inline-block align-top"
      alt="Ansible"
    />
    <h2 style="padding-top: 20px; padding-bottom: 40px">The partisan-free social network</h2>

    <button onClick="register">Register an Account</button>
    <br>
    <button onClick="aboutUs">About the Devs</button>
  </div>
</template>

<style scoped lang="css">
  * {
    font-family: "Source Sans Pro", Arial, sans-serif;
    margin: 0;
  }

  .spin {
    animation: rotation 6s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  button {
    font-weight: 600;
    box-sizing: border-box;
    border-color: #7137C8;
    color: white;
    background-color: #7137C8;
    border-radius: 0.5em;
    cursor: pointer;
    margin: 10px;
    padding: 1% 1%;
  }
</style>

<!--
<script>
export default {
  methods: {
    register (){
    
    }
    aboutUs (){

    }
}
}
</script>
-->