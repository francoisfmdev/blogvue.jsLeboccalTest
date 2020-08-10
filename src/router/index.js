import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addArticle from '../components/addArticle.vue'
import postGrid from '../components/postGrid.vue'
import article from '../components/article.vue'


Vue.use(VueRouter)

  const routes = [
/*
Les routes sont des objets contenus dans un tableau.
Ces objets ont plusieurs Attributs qui permettent de définir l’URL ou le nom. Toutes les routes doivent contenir un paramètre “component” qui est le composant ou la vue à afficher. 
https://vuejs.org/v2/guide/migration-vue-router.html#Route-Definitions
*/
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addArticle',
    name: 'Add',
    component: addArticle
  },
  {
    path: '/blog',
    name: 'blog',
    component: postGrid
  },
  {
/*
Ici, nous avons une route particulière car son path est étrange. En effet, cette route passe une “props” dans son URL. On reconnaît cette syntaxe 
“:paramètre”. Dernière chose à noter : l’utilisation de l’attribut “props: true” 
indique que la route va transmettre des props. 
Plus de détails ici : https://router.vuejs.org/fr/guide/essentials/passing-props.html
*/
    path: '/article/:title/:content',
    name: 'article',
    component: article,
    props:true,
  },
]

/*
Nous créons une instance de Vue routeur sans oublier de lui passer le tableau des routes.
Nous pouvons lui définir d’autres attributs comme le mode URL choisi :
Le mode history garde l’historique dans le navigateur.
Le mode par défaut est le mode hash. Il simule une URL complète pour chaque vue afin de ne pas recharger la page.
En savoir plus:
https://router.vuejs.org/fr/guide/#javascript
https://router.vuejs.org/fr/guide/essentials/history-mode.html#mode-historique-de-html5

*/
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
