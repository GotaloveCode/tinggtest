<template>
  <div id="app">
    <Sidebar/>
    <div class="page-container">
      <Toolbar/>
      <main class='main-content bgc-grey-100'>
        <div class="container-fluid">
          <h2 class="main-title">Dashboard Overview</h2>
          <div class="row">
            <div class="col-md-3">
              <chama-card/>
            </div>
            <div class="col-md-3">
              <order-card/>
            </div>
            <div class="col-md-3">
              <attempt-no-card/>
            </div>
            <div class="col-md-3">
              <attempt-card/>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <heat-map/>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue';
import Toolbar from './components/toolbar.vue';
import ChamaCard from "./components/ChamaCard";
import OrderCard from "./components/OrderCard";
import AttemptNoCard from "./components/AttemptNoCard";
import AttemptCard from "./components/AttemptCard";
import HeatMap from "./components/HeatMap";

export default {
  name: 'app',
  components: {
    AttemptNoCard,
    AttemptCard,
    OrderCard,
    ChamaCard,
    HeatMap,
    Toolbar,
    Sidebar,
  },
  methods: {

  }
}
</script>

<style>
  .main-title{
    font-size: 20px;
    color:#333;
  }
</style>
