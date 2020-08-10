<template>
  <div class="row">
    <div class="col-12">
      <h1>Blog Javascript</h1>
    </div>
    <div class="col-12">
      <div class="textHome">
          Test technique pour Le Bocal Academy.<br/>
        Blog réalisé en Javascript avec Vue.JS<br/>
        Coté serveur une API en node.js express.js mongoose mongoDB
        fournit par vos soin.<br/>
      </div> 
      <div class="textHome">
        <hr/>
        Le code est commenté pour être compris par des étudiants.<br/>
        Certaines améliorations reste à faire comme par exemple:<br/>
          Intégrer du markdown<br/>
          Utilisé une API pour les commentaires<br/>
          Une utilisation de Nuxt.js pour profiter du  SSR (server side rendering)<br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.textHome{
  text-align: center;
  margin-top: 50px;
  font-size:18px;
}
</style>
