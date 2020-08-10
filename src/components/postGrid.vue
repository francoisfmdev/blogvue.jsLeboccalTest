<template>
    <div  class="row">
      <div class="col-12">
        <h1>Le blog</h1>
      </div>
<!--
v-for est une directive Vue.js. Elle permet de parcourir un tableau de données puis de l'afficher. Elle peut également passer certaines valeurs sous forme de variable en props. 
En savoir plus: 
https://vuejs.org/v2/api/#v-for

-->
      <div v-for="article in articles" :key="article.id"
        v-bind:title="article.title" class="card" style="width: 19rem;">
      <img class="card-img-top" src="../assets/banner-posted.png" alt="Card image cap">
      <div class="card-body">
<!--
Permet de faire un rendu déclaratif pour rendre des données réactives en cas de changement de celles-ci.
En savoir plus:
https://vuejs.org/v2/guide/
-->
      <h5 class="card-title">{{article.title}}</h5>
<!--
Ici, comme je l’ai dit plus haut, nous ne passons pas une URL mais un objet contenant plusieurs attributs dont les paramètres transmis par l’URL via l’attribut “params”.
https://router.vuejs.org/fr/guide/essentials/passing-props.html
-->
      <p class="link"><router-link   :to="{ name: 'article', params: { title: article.title, content:article.content } }">En savoir plus</router-link></p>
  </div>
  </div>
</div>
</template>

<script>
export default {
/*
La méthode data() retourne un objet de données réactives à chaque fois que l’une de ces données changent. Elle provoque une mise à jour dans toutes les parties du DOM affectées par ces données..
En savoir plus :
https://vuejs.org/v2/api/#data
*/
  data(){
    return{
      articles:[]
    }
  },
/*
mounted() est une fonction de hook de cycle de vie.
Il en existe un certain nombre comme “created” ou “beforecreate”. 
Elles permettent tout simplement d'exécuter du code à des moments précis de l’application, avant qu'un composant soit créé ou à chaque fois qu’il est mis à jour.
En savoir plus:
https://vuejs.org/v2/guide/instance.html

*/
   mounted(){
/*
Ici on utilise l’ API “fectch()” pour consommer une api.  (En l'occurrence une API de la Bocal Academy).
On utilise le protocole REST pour faire une requête de type Get afin de récupérer des données du serveur.
fetch() ne renvoie pas des données : il renvoie une promesse de les recevoir quand elle seront disponibles. Cela permet à notre programme de pouvoir faire autre chose le temps de recevoir les données.
C’est ce que l’on appelle du code asynchrone.
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
*/
    fetch('https://sandbox.lebocal.academy/posts/all')
      .then(response => response.json())
      .then(data => {
          this.articles = data.posts
      })
  }
  
} 
</script>

<style lang='scss'>
.card{
  margin-top:$cardMT;
  margin-left: $cardML;
}
.link{
  border:$borderWidth solid $Orange;
  border-radius:$radius;
  margin-top:$linkMT;
  padding:$linkP;
  width:$linkW;
}
.link a{
  color:$Orange;
  margin-left:$linkaML;
}
h5{
  text-align:center
}
</style>