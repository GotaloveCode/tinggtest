<template>
    <div class="sidebar">
        <div class="sidebar-inner">
            <!-- ### $Sidebar Header ### -->
            <div class="sidebar-logo">
                <div class="peers ai-c fxw-nw">
                    <div class="peer peer-greed">
                        <a class="sidebar-link td-n" href="#">
                            <div class="peers ai-c fxw-nw">
                                <div class="peer">
                                    <div class="logo">
                                        <img src="https://via.placeholder.com/50x50" alt="Amana Cereals">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="peer">
                        <div class="mobile-toggle sidebar-toggle">
                            <a href="" class="td-n">
                                <i class="ti-arrow-circle-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-logo">
                <div class="peer peer-greed">
                    <a class="sidebar-link td-n" href="#">
                        <div class="peers ai-c fxw-nw">
                            <div class="peer">
                                <div class="logo mt-3">
                                    <img src="https://via.placeholder.com/50x50" alt="Tingg Shops">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h6 style="font-weight: 700;color: #000">Amana cereals</h6>
                    </div>
                </div>
            </div>

            <!-- ### $Sidebar Menu ### -->
            <ul class="sidebar-menu scrollable pos-r">
                <li class="nav-item">
                    <a class='sidebar-link active' href="#" >
                        <span class="title">Heat Map</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class='sidebar-link' href="#">
                        <span class="title">Growth</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="sidebar-link" href="#">
                        <span class="title">Reports</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar.vue"
    }
</script>

<style scoped>

</style>