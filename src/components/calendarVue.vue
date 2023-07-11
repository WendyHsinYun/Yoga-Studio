<template lang="pug">
.calendar-container
  h2 課程行事曆
  div(ref='calendarEl')
</template>

<style lang="sass" scoped>
.calendar-container
  width: 60%
  aspect-ratio: 4/3
  margin-top: 80px
  text-align: center
  h2 
    font-size: 24px
    color: #626262
    letter-spacing: 3px
    font-weight: thin
    margin-bottom: 50px
  div
    height: 100%
    width: 100%
</style>


<script setup>


import { onMounted,  ref  } from 'vue';

// calander 

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
      googleCalendarId: '338dcb0f9b82233383f8f13c276494f8058566d2250c52e0bd658b081aa6738a@group.calendar.google.com',
    }
  })

  calendar.render()
})

</script>
```