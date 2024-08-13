<template>
  <header>
    <nav-bar />
  </header>

  <main>
    <product-view
      :fruit-name="computedName"
      :fruit-description="computedDescription"
      :fruit-image="computedImage"
      :fruit-origin="computedOrigin"
      :fruit-season="computedSeason"
      @add-to-cart="AddToCart"
      @next-fruit="nextFruit"
      @previous-fruit="previousFruit"
    />
  </main>
</template>

<script>


export default {
  // components:{ Navbar },
  data() {
    return {
      index: 0,
      cartItems: [],
      fruits: [
        {
          name: "Apple",
          description:
            "A sweet, crisp fruit that comes in many varieties and colors. Apples are high in fiber and vitamin C.",
          image_url: "images/apple.webp",
          origin: "Central Asia",
          season: "Fall",
        },
        {
          name: "Banana",
          description:
            "A tropical fruit that is sweet and soft when ripe. Bananas are a great source of potassium.",
          image_url: "images/banana.webp",
          origin: "Southeast Asia",
          season: "Year-round",
        },
        {
          name: "Orange",
          description:
            "A citrus fruit known for its juicy, tangy taste and high vitamin C content.",
          image_url: "images/orange.webp",
          origin: "China",
          season: "Winter",
        },
        {
          name: "Strawberry",
          description:
            "A bright red, juicy fruit with a sweet flavor. Strawberries are high in antioxidants and vitamin C.",
          image_url: "images/strawberry.webp",
          origin: "France",
          season: "Spring",
        },
        {
          name: "Grapes",
          description:
            "Small, sweet or tart fruits that grow in clusters. Grapes can be eaten fresh or used to make wine.",
          image_url: "images/grapes.webp",
          origin: "Near East",
          season: "Fall",
        },
        {
          name: "Watermelon",
          description:
            "A large, juicy fruit with a thick green rind and sweet, red flesh. Watermelons are popular in the summer.",
          image_url: "images/watermelon.webp",
          origin: "Southern Africa",
          season: "Summer",
        },
        {
          name: "Mango",
          description:
            "A tropical fruit with sweet, juicy flesh and a large pit. Mangoes are rich in vitamins A and C.",
          image_url: "images/mango.webp",
          origin: "South Asia",
          season: "Summer",
        },
      ],
    };
  },
  computed: {
    computedName() {
      return this.fruits[this.index].name;
    },
    computedDescription() {
      return this.fruits[this.index].description;
    },
    computedOrigin() {
      return this.fruits[this.index].origin;
    },
    computedSeason() {
      return this.fruits[this.index].season;
    },
    computedImage() {
      return this.fruits[this.index].image_url;
    },
  },
  methods: {
    nextFruit() {
      this.index = (this.index + 1) % this.fruits.length;
    },
    previousFruit() {
      this.index = (this.index - 1) % this.fruits.length;
    },
    AddToCart(){
      this.cartItems.push(this.fruits[this.index].name)
    }
  },
  provide() {
    return {
      cartItems: this.cartItems
    }
  }
  
};
</script>
<style></style>
