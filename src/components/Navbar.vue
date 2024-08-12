<template>
  <nav
    :class="[
      'navbar',
      'navbar-expand-lg',
      themeClass.navbarClass,
      themeClass.bgClass,
    ]"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Biz</a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="page in pages" class="nav-item">
            <a
              class="nav-link"
              :href="page.link"
              @click.prevent="navLinkClicked(index)"
              >{{ page.name }}</a
            >
          </li>
        </ul>
      </div>
      <button class="btn btn-info" @click.prevent="changeTheme">
        {{ themeText }}
      </button>
      <div >
        <button class="btn btn-success fs-6 mx-4" @click.prevent="ShowChart = !ShowChart">
          Cart <i class="bi bi-cart"></i> {{ cartItemsLength }}
        </button>
      </div>
    </div>
  </nav>
  <div class="absoluteCartMenu" v-show="ShowChart">
      <cart-item/>
    </div>
</template>

<script>

export default {
  inject: ['cartItems'],
  data() {
    return {
      isDarkTheme: false,
      themeText: "dark mode",
      cartItemsLength:0,
      ShowChart: false,
      pages: [
        {
          name: "Home",
          link: "index.html",
          pageTitle: "Hell, this is homepage",
        },
        {
          name: "About",
          link: "about.html",
          pageTitle: "Hell, this is about us page",
        },
        {
          name: "Services",
          link: "services.html",
          pageTitle: "Hell, this is services page",
        },
        {
          name: "Contact",
          link: "contact.html",
          pageTitle: "Hell, this is contact page",
        },
      ],
    };
  },
  computed: {
    themeClass() {
      return this.isDarkTheme
        ? { navbarClass: "navbar-light", bgClass: "bg-light" }
        : { navbarClass: "navbar-dark", bgClass: "bg-dark" };
    },
    themeText() {
      return this.isDarkTheme ? "dark mode" : "light mode";
    },
    cartItemsLength() {
      return this.cartItems.length;
    }
    
  },
  methods: {
    changeTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
  },

};
</script>
<style>
.relativeCartMenu{
  position: relative;
}
.absoluteCartMenu{
  position: absolute;
  top:60px;
  left:76.5vw;
}</style>
