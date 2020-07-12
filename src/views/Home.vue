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
    <h2 style="padding-top: 20px">Insert Motto. Insert Tagline.</h2>
    <button onClick="register">Register an Account></button>
    <button onClick="aboutUs">About the Developers></button>
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