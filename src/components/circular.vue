<template lang="pug">
.circular(data-swiper-parallax="2000")
    .c-container
        .c-nav
            .dot-1(data-text="Namaste")
            .dot-2(data-text="瑜珈課")
            .dot-3(data-text="機械皮拉提斯")
            .dot-4(data-text="空中瑜珈")
</template>


<script setup>

</script>

<style lang='sass' scoped>
.circular
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
    .c-container
        width: 450px
        height: 450px
        top: -650px
        left: 50%
        transform: translateX(-50%)
        position: absolute
        display: flex
        justify-content: center
        align-items: center
  
        .c-nav
            width: 400px
            height: 400px
            border-radius: 50%
            border: 1px solid #565151
            opacity: .5
            position: absolute
            display: flex
            justify-content: center
            align-items: center
            
            .dot-1, .dot-2, .dot-3, .dot-4 
                position: relative
                width: 8px
                height: 8px
                border: 1px solid #565151
                border-radius: 50%
                background-color: #565151
            .dot-1::after, .dot-2::after, .dot-3::after, .dot-4::after
                content: attr(data-text)
                letter-spacing: 1px
                font-family: 'Playfair Display'
                white-space: nowrap
                position: absolute
            .dot-1::after
                top: 35px
                right: -30px 
            .dot-1
                top: 45%
            .dot-2::after
                right: -80px
                top: -5px 
            .dot-2
                right: -45%
            .dot-3::after
                top: -45px
                right: -50px
            .dot-3
                top: -45%
            .dot-4::after
                top: -5px
                right: 55px
            .dot-4 
                right: 45%
</style>