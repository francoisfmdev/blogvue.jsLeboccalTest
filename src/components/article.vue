<template>
    <div  class="row">
      <div class="offset-1 col-11">
        <h1>{{title}}</h1>
      <img  class="bannerArticle" src="http://placeimg.com/1000/280/tech"/>
      <p class="content">{{content}}</p>
      <p>François</p>
      </div>
      
    </div>
</template>

<script>
export default {
/*
Les props sont des données passé par le composant parent à un composant enfant, afin d’être utiliser. 
https://vuejs.org/v2/api/#props
*/
    props:['title','content'],
  data(){
    return{
       
    }
  }
  
} 
</script>

<style lang="scss">
.content{
  margin-top: $contentMT;
  letter-spacing: $letterSpacing;
  line-height: $lineH;
}
.bannerArticle{
  margin-top: $bannerArticleMT;
  margin-bottom: $bannerArticleMB;
}
</style>