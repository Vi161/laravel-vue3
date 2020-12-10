<template>
    <div>
        <div class="checkout-pagination-wrap mt-4 pt-2 d-flex justify-content-between align-items-center mx-auto">
            <div class="d-flex flex-column align-items-center" v-for="(item, index) in checkoutSteps" :key="index">
                <router-link
                    :to="{ name: `CheckoutStep${index + 1}`}"
                    class="rounded-circle checkout-pagination shadow"
                    :class="stepFunc(index+1)"
                >
                    {{ index + 1 }}
                </router-link>
            </div>

        </div><!--end col-->
        <router-view
        />
    </div>
</template>

<script>
    import CheckoutStep1 from './CheckoutStep1'
    import CheckoutStep2 from './CheckoutStep2'
  

    export default {
        components: {CheckoutStep1,CheckoutStep2},
        name: 'Checkout',
        data() {
            return {
                step: 'CheckoutStep1',
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
                if (from.path.indexOf("checkout/") == -1 && to.name !='CheckoutStep1') {
                    console.log('CheckoutStep1')
                    this.$router.push({ name: 'CheckoutStep1'});
                }
                this.step = to.name
            },
        },
        methods: {
            stepFunc(i) {
                this.lastStep = this.$store.state.lastStep
                if (this.step == `CheckoutStep${i}`) {
                    return 'active'
                } else if (i > this.lastStep) {
                    return 'disactive';
                }
            },
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
