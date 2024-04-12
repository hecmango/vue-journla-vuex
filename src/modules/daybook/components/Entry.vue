<template>
  <div
  class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params: { id: entry.id }})"
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
          return (this.entry.text.length > 130)
          ? this.entry.text.substring(0,130) + '...'
          : this.entry.text
        },
        getDate() {
            const date = new Date( this.entry.date )
            return getDayMothYear(date)
        }
        // day() {
        //     // console.log(typeof this.entry.date);
        //     const date = new Date( this.entry.date )
        //     // console.log( typeof date);
        //      return date.getDate();
        // },
        // month() {
        //     const date = new Date( this.entry.date )
        //     // console.log(date);
        //     // console.log(date.getMonth());
        //     return months[ date.getMonth() ]
        // },
        // yearDay() {
        //     const date = new Date(  this.entry.date )
        //     return `${date.getFullYear()}, ${ days[ date.getDay() ] }`
        // }
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