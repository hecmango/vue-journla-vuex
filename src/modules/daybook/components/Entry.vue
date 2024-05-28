<template>
  <div
  class="entry-container mb-3 pointer p-2"
  @click="goToEntryView"
  >
    <div
    class="entry-tittle d-flex">
        <span class="text-success fs-5 fw-bold">{{ getDate.day }} </span>
        <span class="mx-1 fs-5">{{getDate.month}}</span>
        <span class="mx-2 fw-light">{{ getDate.yearDay }}</span>
    </div>

    <div class="entry-description">
        {{ shortText }}
    </div>
  </div>
</template>

<script>
import getDayMothYear from "../helpers/getDayMothYear";
export default {
    props: {
        entry: {
            type: Object,
            required: true
        } 
    },
    computed: {
        shortText() {
          return (this.entry.text.length > 100)
          ? this.entry.text.substring(0,100) + '...'
          : this.entry.text
        },
        getDate() {
            const date = new Date( this.entry.date )
            return getDayMothYear(date)
        }
    },
    methods: {
        goToEntryView() {
            if(this.$router?.currentRoute?.params?.id !== this.entry.id) {
                this.$router.push({name: 'entry', params: { id: this.entry.id }})
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>