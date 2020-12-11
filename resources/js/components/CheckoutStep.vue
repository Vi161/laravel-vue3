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
                                 <!--                                 <p class="label-month position-absolute">12 month</p>-->
                             </div>
                             <button
                                 class="btn border-dark mt-4"
                                 @click="toSecondStep( item.frontName)"
                             >
                                 Select Package
                             </button>
                         </div>
                     </div>
                 </div><!--end col-->
             </div><!--end row-->
         </div><!--end container-->
         <!-- Price End -->

         <!-- Testi Start -->
     </section><!--end section-->
</template>

<script>

export default {
  name: 'CheckoutStep',
    props: {
        // step: Number
    },
    data() {
        return {
            products: [
                {
                    frontName: 'Name 1',
                    subtitle: 'lalalal laldsf lasdf'
                },
                {
                    frontName: 'Name 2',
                    subtitle: 'tutuguurg uar ruug'
                }
            ],
            lastStep: 1,
            
        }
    },
    created() {
        this.$store.commit('lastStepMut', this.lastStep);
        console.log('lalal',this.$store.state.lastStep);
    },
    methods: {
        toSecondStep(name) {
            let thisStep = this.$store.state.thisStep;
            this.$store.commit('thisStepMut', thisStep + 1);
            this.$router.push({ path: `/checkout/step${thisStep + 1}`});
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
