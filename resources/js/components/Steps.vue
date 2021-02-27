<template>
     <section class="section py-4">
         <div class="container">
             <div class="row justify-content-center mb-4"
             >
                 <div class="col-md-4 col-12 mt-4 pt-2"
                      v-for="(item, index) in products"
                      :key="index"
                 >
                     <div class="card pricing-rates business-rate shadow bg-lightgreen-custom rounded text-center border-0">
                         <div class="card-body py-4 d-flex flex-column justify-content-between align-items-center position-relative">
                             <div>
                                 <div class="border-bottom">
                                     <h4 class="text-uppercase mb-2 text-red-custom">{{ item.frontName}}</h4>
                                     <h5 class="mb-4 text-red-custom">{{ item.subtitle}}</h5>
                                 </div>
                             </div>
                             <button
                                 class="btn border-dark mt-4"
                                 @click="toSecondStep( item.frontName)"
                             >
                                 Select Package
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
</template>

<script>

export default {
  name: 'CheckoutStep',
    props: {
        // step: Number
    },
    data() {
        return {
            products: [],
        }
    },
    created() {
        this.$router.push({ path: `/step1`});
        this.getProducts();
    },
    watch: {
        '$route'(to, from) {
            this.getProducts();
        },
    },
    methods: {
        getProducts() {
            this.products = this.$store.state.checkoutSteps[this.$store.state.thisStep - 1].elements
        },
        toSecondStep(name) {
            let stepNum = this.$store.state.checkoutSteps.length;
            let thisStep = this.$store.state.thisStep;
            if (thisStep < stepNum) {
                this.$store.commit('thisStepMut', thisStep + 1);
                this.$router.push({ path: `/step${thisStep + 1}`});
            } else {
                console.log('This is the Last Step!!!', stepNum, thisStep)
            }
            
        }
    },
};
</script>
<style>
    .label-month {
        top: 10px;
        left: 10px;
    }
</style>
