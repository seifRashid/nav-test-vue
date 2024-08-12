<template>
    <div class="card card-size bg-dark text-light">
        <div class="card-header">
          Cart Items
        </div>
        <div class="card-body">
          <ul v-for="(item ,index) in cartItems" >
            <li>{{ item }} {{ index+1 }}</li>
          </ul>
        </div>
      </div>
</template>
<script>
export default{
    inject:['cartItems'],
    data() {
        return {

        }
    }
}
</script>
<style>
.card-size{
    width: 300px;
}
li {
    list-style: none;
}
</style>