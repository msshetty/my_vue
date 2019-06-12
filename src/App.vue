<template>
  <div>
    <Header></Header>
    <div class="container"><br><br>
      <router-view></router-view>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'

export default {
  components:{ Header, Footer }
}
</script>

