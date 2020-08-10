<template>
    <div class="row">
      <div class="col-12">
      <h1>Ajouter un article</h1>
    </div>
    <b-alert class="col-12" v-model="badAlert" variant="danger" dismissible>
      Envoie des données impossible !
    </b-alert>
    <b-alert class="col-12" v-model="goodAlert" variant="success" dismissible>
      Envoie des données terminer !
    </b-alert>
      <form class="col-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Titre</span>
            </div>
<!--
 v-model est une directive Vue.js qui permet de lier une donnée à un élément de HTML de façon bidirectionnelle.
https://vuejs.org/v2/api/#v-model 
-->
            <input v-model="article.title" type="text" class="form-control">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">L'article</span>
            </div>
            <textarea v-model="article.content" class="form-control"></textarea>
          </div>

          <div class="input-group mb-3">
            <input v-model="article.author" type="text" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">Auteur</span>
            </div>
          </div>
<!--
@click est une directive qui permet de lier un élément à un gestionnaire événement.
.prevent, quant à lui, est un modificateur d'événement il permet d’effectuer certaines actions au moment où l'événement se déclenche.
https://vuejs.org/v2/guide/events.html
-->
            <button @click.prevent="post" type="button" class="btn btn-link">Envoie</button>
      </form> 
    </div>
</template>

<script>
export default {
  data(){
    return{
      article:{title:"",
      id: "",
      content:"",},
      goodAlert:false,
      badAlert:false,
    }
  },
  methods:{
    post(){
      this.goodAlert = false
      this.badAlert = false
/*
Nous commençons par initialiser un objet dans une constante.
Cet objet sert à transmettre certains paramètres à la fonction fetch() comme la méthode ; ici POST.
Nous allons envoyer une donnée sur le serveur via le protocole REST.
Nous indiquons aussi le type de données attendu ; du JSON dans notre cas.
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
*/
      const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(this.article)
  };
  fetch('https://sandbox.lebocal.academy/posts/add', requestOptions)
    .then(response => {
      if(response.ok){
        this.goodAlert = true
        response.json()
      }else{
        console.log("l'opération à échoué")
        this.badAlert = true
      }
      
      })
    .then(data => this.postId = data.id);
    }
  }
}
</script>

<style lang="scss">
form{
  margin-top:$formMT;
  margin-left: $formML;
}
</style>