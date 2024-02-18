<template>
    <div>
        <Navbar></Navbar>
        <div class="d-flex">
            <div class="col-4">
                <EntryList></EntryList>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components:{
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(()=> import('../components/EntryList.vue'))
    }
}
</script>