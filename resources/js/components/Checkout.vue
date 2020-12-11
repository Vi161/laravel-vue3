<template>
    <div>
        <div class="checkout-pagination-wrap mt-4 pt-2 d-flex justify-content-between align-items-center mx-auto">
            <div class="d-flex flex-column align-items-center" v-for="(item, index) in checkoutSteps" :key="index">
                <a
                    @click="changeStep(index+1)"
                    class="rounded-circle checkout-pagination shadow"
                    :class="stepFunc(index+1)"
                >
                    {{ index + 1 }}
                </a>
            </div>

        </div><!--end col-->
        <router-view
        />
    </div>
</template>

<script>
    // import CheckoutStep1 from './CheckoutStep1'
    // import CheckoutStep2 from './CheckoutStep2'
    import CheckoutStep from './CheckoutStep'


    export default {
        components: {CheckoutStep},
        // components: {CheckoutStep1,CheckoutStep2},
        name: 'Checkout',
        data() {
            return {
                step: 1,
                checkoutSteps: ['step1','step2'],
                lastStep: 1,
                paymentData: null,
                lineSpeed: null,
                speed: null,
                total: null,
            }
         },
        watch: {
            '$route'(to, from) {
                // if (from.path.indexOf("checkout/") == -1 && to.path !='/checkout/step1') {
                //     this.$router.push({ path: `/checkout/step${1}`});
                // }
                this.step = this.$store.state.thisStep;
                console.log('store this step', this.step)
            },
        },
        methods: {
            stepFunc(i) {
                this.lastStep = this.$store.state.lastStep
                console.log('this.step', this.step, i)

                if (this.step == i) {
                    return 'active'
                }
                else if (i > this.lastStep) {
                    console.log('this.lastStep', i, this.lastStep)
                    return 'disactive';
                }
            },
            changeStep(i) {
                this.step = i;
                this.$store.commit('thisStepMut', i);
                this.$router.push({ path: `/checkout/step${i}`});
            }
        },

    };
</script>
<style lang="scss">
    #app {
        margin-top: 100px;
    }
    .checkout-pagination.disactive {
        pointer-events: none;
    }
    .btn-primary, .btn-outline-primary, .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:not(:disabled):not(.disabled):active{
        background-color: transparent !important;
        color: #1b7316 !important;
    }
    .active {
        .btn-primary, .btn-outline-primary, .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:not(:disabled):not(.disabled):active{
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
