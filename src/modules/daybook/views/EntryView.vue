<template>
  <div>
    <template  v-if="entry">
      <div class="entry-tittle d-flex justify-content-between p-2">
        <div>
          <span class="text-success fs-3 fw-bold">{{ getDate.day }}</span>
          <span class="mx-1 fs-3">{{getDate.month}}</span>
          <span class="mx-2 fs-4 fw-light">{{ getDate.yearDay }}</span>
          <span></span>
        </div>
    
        <div>
          <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>
    
          <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
          </button>
        </div>
      </div>
  
      <hr>
      <div class="d-flex flex-column px-3 h-75">
        <textarea 
        placeholder="¿Qué sucedió hoy?"
        v-model="entry.text"
        >
  
        </textarea>
      </div>
    </template>
    <Fab 
    @on:click="saveEntry"
    icon="fa-save">
    </Fab>

    <img 
    src="https://img.asmedia.epimg.net/resizer/PZHkrHct0OO2eLah-3TZkpngW8s=/1472x1104/filters:focal(2155x1396:2165x1406)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SJCYDWNWIMJY3Y2OROIBOR37VI.jpg"
    alt="entry-picture"
    class="img-thumbnail"
    >
  </div>
</template>

<script>
import getDayMothYear from "../helpers/getDayMothYear";
import { defineAsyncComponent } from 'vue'
import { mapGetters } from "vuex";
export default {
  components: {
    Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
  },
  data() {
    return {
      entry: null
    }
  },
  computed: {
    ...mapGetters('journalModule', [
      'getEntryById'
    ]),
    getDate() {
            const date = new Date( this.entry?.date )
            return getDayMothYear(date)
        }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id)
      if(!entry)  return this.$router.push({name: 'no-entry'})
      this.entry = entry
    },
     async saveEntry() {
      console.log('Guardando entrada...');
    }
  },
  created() {
    this.loadEntry()
  },
  watch: {
    id() {
      this.loadEntry() 
    }
  }
}
</script>

<style lang="scss" scoped>
  textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>