
import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import ProductView from './components/ProductView.vue'
import ProductReview from './components/ProductReview.vue'
import CartItem from './components/CartItem.vue'

const app = createApp(App)

app.component('nav-bar', Navbar)
app.component('product-view',ProductView)
app.component('product-review',ProductReview)
app.component('cart-item',CartItem)
app.mount('#app')
