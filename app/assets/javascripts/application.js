//= require rails-ujs
//= require_tree .

//= require jquery
//= require jquery_ujs

//= require moment
//= require fullcalendar
//= require fullcalendar/locale-all

// const events = [
//     {
//       title  : 'event1',
//       start  : '2019-02-10',
//     },
//     {
//       title  : 'event2',
//       start  : '2019-02-15',
//       end    : '2019-02-17'
//     },
//     {
//       title  : 'event3',
//       start  : '2019-02-18',
//       end    : '2019-02-19'
//     },
//     {
//       title  : 'event4',
//       start  : '2019-02-12',
//       end    : '2019-02-14'
//     },
//   ]

$('#calendar').fullCalendar({
  themeSystem: 'bootstrap3',
  locale: 'fr',
  editable: true,
  selectable: true,
  header: {
    left: 'prev,next,today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay,listMonth'
  },
  dayClick: function(date) {
    alert('clicked ' + date.format());
  },
});

function addEvent(event) {
  $('#calendar').fullCalendar('renderEvent', event)
}

function injectEvents(events) {
  events.forEach((event) => {
    const event1 = {
      title: event.title,
      start: event.start_date,
      end: event.end_date
    }
    addEvent(event1)
  })
}

injectEvents(gon.events)
// injectEvents(events);

////////// REMOVE EVENTS /////////////

// function removeEvent(event) {
//   event.target.remove();
// }


// const eventsContainers = document.querySelectorAll('.fc-event-container a')

// eventsContainers.forEach((event) => {
//   addEventListener('click', removeEvent)
// })


