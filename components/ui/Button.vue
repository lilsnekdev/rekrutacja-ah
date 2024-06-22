<template>
    <component :is="tag" :to="to" :class="buttonClasses" @click="$emit('click')">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'plain'
        },
        small: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            default: null
        }
    },
    computed: {
        buttonClasses() {
            const baseClasses = `py-2 px-4 sm:px-8 w-full sm:w-[340px] text-center rounded-xl text-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${this.small && 'max-w-[120px]'}`;
            const variants = {
                plain: 'bg-primary hover:bg-primary-dark',
                gradient: 'bg-gradient-to-b from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light',
            };
            return `${baseClasses} ${variants[this.variant]}`;
        },
        tag() {
            return this.to ? 'nuxt-link' : 'button';
        }
    },
}
</script>
