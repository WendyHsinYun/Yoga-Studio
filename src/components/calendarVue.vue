<template lang="pug">
.calendar-container
  .calendar-title 課程行事曆
  .calendar(ref='calendarEl')
</template>

<style lang="sass" scoped>

.fc 
  .fc-button
    padding: 0px
.calendar-container
  width: 75%
  aspect-ratio: 4/3
  margin-top: 5%
  margin-bottom: 5%
  text-align: center
  
  .calendar-title 
    font-size: 24px
    color: #626262
    letter-spacing: 4px
    font-weight: thin
    margin-bottom: 50px
    // border: 1px solid #626262
  .calendar
    height: 100%
    width: 100%

@media (min-width: 0px) and (max-width: 700px)
  .calendar-container
    .calendar-title
      position: absolute
      font-size: 20px
      left: 50%
      transform: translateX(-50%)
    .calendar
      margin-top: 100px
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
    height: 700,
    aspectRatio: 3/4,
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