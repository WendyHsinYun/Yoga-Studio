<template lang="pug">
.contact-container
  section.sec1
    v-row(
      justify="center"
      align="start" 
      )
      v-col.flex-column.text-center(
        style="user-select: text; "
        justify="start"    
        cols="9"
        )
        .cardTitle 聯絡卡姊
        .cardContent
          .cardText line：jessica0125 
          .cardText phone : 0937849328 
          .cardText email : jt126129@gmail.com
        v-img(
          src="../src/assets/images/contact.webp"
          height="300" 
          center 
          style="transform: translateY(-30px)")
          template(v-slot:placeholder='')
            .d-flex.align-center.justify-center.fill-height
              v-progress-circular(color='grey-lighten-4' indeterminate='')
  section.sec2
    v-row(
      justify="center"
      align="start" 
      )
      v-col(
        justify="start"
        align="center"
        cols="9" 
        )
        .formTitle 填寫表單
        v-form(
          fast-fail 
          @submit.prevent="sendEmail"  
          ref="form" 
          style="color: #2A2A2A;")
          v-text-field(
            density="compact" 
            variant="underlined" 
            v-model='userName.value.value' 
            :counter='20' 
            :error-messages='userName.errorMessage.value' 
            label='名字' 
            ref="nameField")
          v-text-field(
            density="compact" 
            variant="underlined" 
            v-model='phone.value.value' 
            :counter='10' 
            :error-messages='phone.errorMessage.value' 
            label='手機' 
            ref="phoneField")
          v-text-field(
            variant="underlined" 
            v-model='email.value.value' 
            :error-messages='email.errorMessage.value' 
            label='E-mail' 
            ref="emailField")
          v-select(
            variant="underlined" 
            v-model='select.value.value' 
            :items="items" 
            :error-messages='select.errorMessage.value' 
            label='想了解的課程' 
            density="compact" 
            name="subject" 
            ref="selectField")
          v-text-field(
            density="compact" 
            variant="underlined" 
            v-model='message.value.value' 
            :error-messages='message.errorMessage.value'  
            label='填寫您的問題' 
            ref="messageField")
          v-row(style=" margin-top: 0px" 
            justify="start" align="center")
            v-btn(
              style=" background-color: #FFA245; color: aliceblue; margin-left: 10px" 
              rounded="lg" 
              type="submit") 送出 
            v-btn.ml-4(
              style=" background-color: #FFA245; color: aliceblue; " 
              rounded="lg" 
              @click='handleReset') 清除
            v-col(
              style="color: #FFA245; font-size: 12px; ") 留下資料後，卡姊將會盡速聯絡您


</template>



<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

import emailjs from 'emailjs-com';


const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    userName(value) {
      if (value?.length >= 2) return true

      return '名字至少需要兩個字元'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return '手機至少需要九個數字'
    },
    email(value) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true

      return '必須為有效的信箱地址'
    },
    select(value) {
      if (value) return true

      return '請選擇一堂課'
    },
    message(value) {
      if (value?.length >= 2) return true

      return '請概述您的問題內容'
    }
  },
})


const userName = useField('userName')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const message = useField('message')

const items = ref([
  '瑜珈課', 
  '機械皮拉提斯', 
  '空中瑜珈', 
  '其他（客製化課程）'
])

const nameField = ref('');
const phoneField = ref('');
const emailField = ref('');
const selectField = ref('');
const messageField = ref('');

const formData = ref({})

const submit = handleSubmit(values => {
  formData.value = values;
  console.log(JSON.stringify(formData.value, null, 2))
})


const sendEmail = () => {
  submit().then(() => {
    emailjs.send(
      'service_f17lxl7', 
      'template_3694268',     
      {
        user_email: formData.value.email,
        from_name: formData.value.userName,
        reply_to : "wendyhsinyun@gmail.com",
        to_name: "卡姊",
        phone: formData.value.phone,
        select: formData.value.select,
        message: formData.value.message,
      }, 
      'OUQqOz6igY5YaEUO8')
      .then(() => {
          alert('郵件已成功發送！請至信箱檢查您寄出的信件內容');
      })
      .then(() => {
        handleReset()
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
    });
};


</script>



<style lang='sass' scoped>
* 
  cursor: default

.contact-container
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  background-color: #F9F9FB
  section
    position: relative
    width: 50% 
    justify-content: center
    align-items: center
    padding-top: 100px
  .sec1
    .cardTitle
      margin: 10px 0px
      font-family: NotoSansHK
      color: #FFA042
      font-weight: 800
      font-size: 20px
      letter-spacing: 1.5px
      line-height: 35px
    .cardContent
      .cardText
        font-size: 14px
        color: #909090
        font-family: 'Playfair Display'
        letter-spacing: 1.5px
        white-space: nowrap
  .sec2
    padding-right: 100px
 
    .formTitle 
      margin: 10px 0px
      font-family: NotoSansHK
      color: #FFA042
      font-weight: 800
      font-size: 20px
      letter-spacing: 1.5px
      line-height: 35px

  .contact-container
    &::after
      content: ""
      background-color: rgba(256, 256, 256, .8)
      z-index: 5

@media(min-width: 400px) and (max-width: 660px)
  .contact-container
    flex-direction: column
    height: auto
    align-items: center
    section
      width: 70%
    .sec2
      padding-top: 50px
      padding-bottom: 100px 
      padding-right: 0px
      width: 70% 

@media(min-width: 0px) and (max-width: 400px)
  .contact-container
    flex-direction: column
    height: auto
    align-items: center
    section
      width: 70%
    .sec1
      .cardTitle
        font-size: 18px
      .cardContent
        .cardText
          font-size: 12px
    .sec2
      padding-top: 50px
      padding-bottom: 100px 
      padding-right: 0px
      width: 70% 
      .formTitle
        font-size: 18px

</style>
