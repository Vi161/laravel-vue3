<template>
    <div>
        <section class="section container row mx-auto  py-4">
            <div class="col-md-9 col-12">
                <div class="row">
                    <div class="col-md-4 col-12 mt-4 pt-2"
                         v-for="(item, index) in products2"
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
                </div>

            </div><!--end container-->

        </section><!--end section-->
    </div>
</template>

<script>

    export default {
        name: 'CheckoutStep2',
    props: {
        fromStep1: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            products2: [
                {
                    frontName: 'Name 3',
                    subtitle: 'lalalal laldsf lasdf'
                },
                {
                    frontName: 'Name 4',
                    subtitle: 'tutuguurg uar ruug'
                }
            ],
            lastStep: 2,
        }
        },
    mounted() {
        this.$store.commit('lastStepMut', this.lastStep);
    },
    computed: {
    },
    methods: {
        toSecondStep(name) {
            console.log('next step', name)
        }
    },
};
</script>
<style lang="scss">
    $custom-green: #1b7316;
    .active {
        .btn-outline-primary, .btn-outline-primary:hover{
            background: #1b7316 !important;
            border-color: #1b7316 !important;
            color: #fff !important;
        }
        &.job-box {
            transform: translateY(-5px);
        }
        &.shadow {
            box-shadow: 0 0 3px $custom-green !important;
        }
    }
    .img-router {
        max-width: 100%;
        max-height: 140px;
        width: 100%;
    }
</style>
