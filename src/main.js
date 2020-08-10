/* 
Le mot-clé “import” permet, comme son nom l’indique, d’importer un module javascript préalablement exporté avec export.
Elle prend comme premier paramètre le nom qui fera référence à l’export par défaut.
Son deuxième paramètre, nom-module, est une chaîne de caractères ‘string’ avec des doubles ou simples quotes. Le plus souvent, c’est un chemin relatif ou absolu .
Ce paramètre doit être précéder du mot-clé “from”.
Le troisième paramètre permet de créer un alias.
Le quatrième paramètre concerne les noms des exports à exporter.
Et pour finir, le cinquième paramètre fait référence aux imports nommés.
Ici, nous n’utilisons que les deux premiers paramètres pour importer tout ce que nous avons besoin pour le démarrage de l’application.
Pour plus de détails: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import
*/
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/*
vue()
L’instruction new Vue() nous permet d’initialiser un objet vue.
Nous lui passons en paramètre un objet d’option, Option qui servira à créer des comportements utiles pour nos futures applications.
Sachez que nous pouvons affecter cette instance de Vue à une variable pour en faire référence à l'extérieur de l’instance, par exemple. 
Ici, on injecte le Routeur avant de monter l’application.
Pour plus de détails: 
https://fr.vuejs.org/v2/guide/instance.html

*/
new Vue({
  router,
/*  
  La fonction render() de Vue est utilisée avec la syntaxe “ES6 Arrow function”.
Elle fait appelle à une méthode createElement() pour créer un Vnode, noeud virtuel dans le virtual DOM.
Si le composant est un composant fonctionnel (il sert uniquement à afficher du texte provenant d’autre composant).
La fonction recevra un argument “context” qui sert à transmettre les données provenant d’autres composants puisqu'il n’a pas d’état.
Pour plus de détails : 
https://vuejs.org/v2/api/#render

*/
  render: h => h(App)
}).$mount('#app')
