<template>
  <div id="app">
    <header>
      <div class="container-fluid">
        </div>
        <div class="row">
          <div class="offset-4 col-8 mt-1">
            <ul class="nav">
              <li class="nav-item">
                <!--4
                router link est le composant de “Vue routeur” pour activer la navigation et  afficher un lien de navigation.
                Sa props to prend un objet pour décrire sa localisation. Si nous indiquons seulement une chaîne de caractères, on lui passe l’URL de destination.
                Pour plus de détails: 
                https://router.vuejs.org/fr/api/#router-link
                -->
                <router-link class="nav-link" to="/">Home</router-link> 
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blog</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/addArticle">Ajouter un article</router-link>
              </li>
            </ul>
          </div>
        </div>
    </header>
    
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--
            C’est ici que le composant ou la vue qui correspond à l'URL sera rendu.
            Pour plus de détails: 
            https://router.vuejs.org/fr/api/#router-view
            -->
               <router-view/>
          </div>
        </div>
      </div>
    </main>
   
  </div>
</template>

<script>
export default {
  
  
}
</script>

<!--6-->
<style lang='scss'>
body{
 font-family: 'Roboto Mono', monospace;
}
.nav-link{
  margin-left:$leftSpace;
  margin-right: $leftSpace;
  font-size: $linkSize;
  color:black;
}
.nav-link:hover{
  color: black;
 border-bottom:solid;
 border-color:$Orange;
 border-width: 1px;
}

h1{
  margin-top:$h1MT;
  text-align: center;
  font-size: $h1Size;
}
.banner{
  margin-top:$bannerMT;
  margin-bottom:$bannerMB;
}
</style>
