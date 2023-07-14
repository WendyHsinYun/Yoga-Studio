<template lang="pug">
.slider-1
    .dot-container 
        .dot
        .title 卡姊的故事 
        .eng-title About Jessica
    .scrollReminder 向右滑動來看

</template>


<script setup>

</script>


<style lang="sass" scoped>
.slider-1
    width: 100%
    height: 100%
    display: flex    
    justify-content: center
    align-items: center
    flex-direction: column
    .dot-container
        width: 300px
        height: 300px
        letter-spacing: 2.5px
        font-family: 'Playfair Display'
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        z-index: 6
        .dot 
            width: 70px
            height: 70px
            background-color: #EB5F7D
            border-radius: 50%
        .title
            margin-top: 30px
            font-weight: 500
            font-size: 1.25rem
            opacity: .5
        .eng-title
            font-weight: 100
            margin-top: 20px
            opacity: .5
    .scrollReminder
        font-family: 'Noto Sans HK'
        font-weight: 100
        font-size: 10pt
        margin-top: 20px
        letter-spacing: 2px
        opacity: .5

@media(min-height: 440px ) and (max-height: 650px )
    .slider-1
        .dot-container
            .title
                margin-top: 30px
                font-weight: 500
                font-size: 1.1rem
                opacity: .5
            .eng-title
                font-weight: 100
                margin-top: 20px
                font-size: .9rem
                opacity: .5
        .scrollReminder
            margin-top: -20px
            letter-spacing: 2px
            font-size: .75rem
            opacity: .5


@media(min-height: 0px ) and (max-height: 440px )
    .slider-1
        .dot-container
            .dot 
                width: 60px
                height: 60px
            .title
                margin-top: 25px
                font-weight: 500
                font-size: 1rem
                opacity: .5
            .eng-title
                font-weight: 100
                margin-top: 15px
                font-size: .8rem
                opacity: .5
        .scrollReminder
            margin-top: -65px
            letter-spacing: 2px
            font-size: .6rem
            opacity: .5

@media(min-width: 0px ) and (max-width: 340px )
    .slider-1
        .dot-container
            transform: translateY(-10%)
            .dot 
                width: 60px
                height: 60px
            .title
                margin-top: 25px
                font-weight: 500
                font-size: 1rem
                opacity: .5
            .eng-title
                font-weight: 100
                margin-top: 15px
                font-size: .8rem
                opacity: .5
        .scrollReminder
            margin-top: -65px
            letter-spacing: 2px
            font-size: .6rem
            opacity: .5
</style>