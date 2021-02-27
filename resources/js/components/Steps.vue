<template>
    <div class="section py-4">
        <section class="checkout-pagination-wrap mt-4 pt-2 d-flex justify-content-between align-items-center mx-auto">
            <div class="d-flex flex-column align-items-center" v-for="(item, index) in checkoutSteps" :key="index">
                <a
                    @click="changeStep(index+1)"
                    class="rounded-circle checkout-pagination shadow"
                    :class="stepFunc(index+1)"
                >
                    {{ index + 1 }}
                </a>
            </div>
        </section>
        <section class="container">
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
        </section>
    </div>
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
                step: 1,
                checkoutSteps: [
                    {
                        step: 'step1',
                        elements: [
                            {
                                frontName: 'Name 1',
                                subtitle: 'iuhiug jK kjhjk '
                            },
                            {
                                frontName: 'Name 2',
                                subtitle: 'tutuguurg uar ruug'
                            },
                        ]
                    },
                    {
                        step: 'step2',
                        elements: [
                            {
                                frontName: 'Name 3',
                                subtitle: 'lalalal laldsf lasdf'
                            },
                            {
                                frontName: 'Name 4',
                                subtitle: 'salfkjsl asdflkjlk  lkf'
                            },
                            {
                                frontName: 'Name 5',
                                subtitle: 'vkjahdkjs o fasd'
                            },
                        ]
                    },
                    {
                        step: 'step3',
                        elements: [
                            {
                                frontName: 'Name 6',
                                subtitle: 'asdf'
                            },
                            {
                                frontName: 'Name 7',
                                subtitle: ';asfjalsjf3 23lkjf2k3'
                            },
                        ]
                    }

                ],

            }
        },
        created() {
            this.$router.push({path: `/step1`});
            this.$store.commit('checkoutStepsMut', this.checkoutSteps);
            // this.getProducts();
        },
        mounted() {
            this.getProducts();

        },
        watch: {
            '$route'(to, from) {
                this.step = this.$store.state.thisStep;
                this.getProducts();
            },
        },
        methods: {
            getProducts() {
                console.log()
                this.products = this.$store.state.checkoutSteps[this.$store.state.thisStep - 1].elements
            },
            toSecondStep(name) {
                let stepNum = this.$store.state.checkoutSteps.length;
                let thisStep = this.$store.state.thisStep;
                if (thisStep < stepNum) {
                    this.$store.commit('thisStepMut', thisStep + 1);
                    this.$router.push({path: `/step${thisStep + 1}`});
                } else {
                    console.log('This is the Last Step!!!', stepNum, thisStep)
                }
            },
            stepFunc(i) {
                if (this.step == i) {
                    return 'active'
                } else if (i > this.step) {
                    return 'disactive';
                }
            },
            changeStep(i) {
                this.step = i;
                this.$store.commit('thisStepMut', i);
                this.$router.push({path: `/step${i}`});
            }
        },
    };
</script>
<style lang="scss">
    .label-month {
        top: 10px;
        left: 10px;
    }

    .checkout-pagination.disactive {
        pointer-events: none;
    }

    .btn-primary, .btn-outline-primary, .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:not(:disabled):not(.disabled):active {
        background-color: transparent !important;
        color: #1b7316 !important;
    }

    .active {
        .btn-primary, .btn-outline-primary, .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:not(:disabled):not(.disabled):active {
            background-color: #1b7316 !important;
            color: #fff !important;
        }
    }

    .checkout-pagination-wrap {
        max-width: 180px;
    }

    .checkout-pagination {
        background-color: #f8f9fc;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #000;
        text-transform: uppercase;

        &.active {
            background-color: lightblue;
            color: #fff;
        }
    }
</style>
