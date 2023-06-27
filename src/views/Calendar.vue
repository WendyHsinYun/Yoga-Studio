<template>
<div class="root">
  <div ref="calendarEl"></div>
</div>
</template>
  
<style lang='sass' scoped>

.root
  margin-top: 50px
  height: 600px
  width: 800px
  background-color: #fff
  
  div
    height: 100%
    width: 100%
</style>


<script setup>
import { ref, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'

import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const calendarEl = ref(null)


onMounted(() => {
  const calendar = new Calendar(calendarEl.value, {
    plugins: [
      googleCalendarPlugin,
      dayGridPlugin,
      timeGridPlugin,
      multiMonthPlugin
    ],
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,multiMonthYear"
    },
    // height: 700,
    // aspectRatio: .5,
    // initialView: 'multiMonthYear', 
    // initialView: 'timeGridWeek',
    initialView: 'dayGridMonth',
    googleCalendarApiKey: 'AIzaSyB4poCUfkAs_97yUwR5p00wxVgH7-ncnuM',
    events: {
      googleCalendarId: 'wendyhsinyun@gmail.com',
      eventTextColor: 'white',
      eventBackgroundColor: '#2DD98A',
    }
  })

  calendar.render()
})


</script>