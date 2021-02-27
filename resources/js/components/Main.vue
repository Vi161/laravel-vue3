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
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Main',
        data: () => ({
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
            lastStep: 1,
            paymentData: null,
            lineSpeed: null,
            speed: null,
            total: null,
        }),
        mounted() {
            this.$store.commit('checkoutStepsMut', this.checkoutSteps);
        },
        watch: {
            '$route'(to, from) {
                this.step = this.$store.state.thisStep;
            },
        },
        
        methods: {
            stepFunc(i) {
                if (this.step == i) {
                    return 'active'
                }
                else if (i > this.step) {
                    return 'disactive';
                }
            },
            changeStep(i) {
                this.step = i;
                this.$store.commit('thisStepMut', i);
                this.$router.push({ path: `/step${i}`});
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
