import Vue from "vue";
import Vuex from "vuex"
import journalModule from "../modules/daybook/store/journal";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        journalModule
    }
})

export default store;
