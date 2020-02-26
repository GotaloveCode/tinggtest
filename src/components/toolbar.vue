<template>
    <div class="header navbar">
        <div class="header-container">
            <ul class="nav-left">
                <li>
                    <div class="input-group mt-2">
                        <input class="form-control py-2 rounded-pill mr-1 pr-5" type="search"
                               placeholder="Search by Keywords">
                        <span class="input-group-append">
                         <button class="btn rounded-pill border-0 ml-n5" type="button">
                               <i class="fa fa-search"></i>
                         </button>
                     </span>
                    </div>
                </li>
            </ul>
            <ul class="nav-right">
                <li><a href="">
                    <span class="sidebar-link" href="#">
                        <span class="icon-holder">
                          <i class="fa fa-twitch"></i>
                        </span>
                    </span>
                </a>
                <li><a href="">
                    <span class="sidebar-link" href="#">
                        <span class="icon-holder">
                          <i class="fa fa-bell-o"></i>
                        </span>
                    </span>
                </a>
                </li>
                <li><a href="">
                    <span class="sidebar-link" href="#">
                        <span class="icon-holder mr-2">
                          <i class=" fa fa-question"></i>
                        </span>
                        <span class="title">Help</span>
                    </span>
                </a>
                </li>
                <li class="dropdown">
                    <a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                        <div class="peer mR-10">
                            <span class="fsz-sm c-grey-900">Janet Wilson</span><br>
                            <small>Administrator</small>
                        </div>
                        <div class="peer">
                            <img class="w-2r bdrs-50p" src="images/admin.png" alt="">
                        </div>
                    </a>
                    <ul class="dropdown-menu fsz-sm">
                        <li>
                            <a href="#"
                               onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                               class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                <i class="fa fa-power-off mR-10"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toolbar.vue"
    }
</script>

<style scoped>

</style>