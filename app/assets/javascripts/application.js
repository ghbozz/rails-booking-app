//= require rails-ujs
//= require_tree .

//= require jquery
//= require jquery_ujs

//= require moment
//= require fullcalendar
//= require fullcalendar/locale-all

const events = [
  { title: 'Event', start: '2019-02-27', end: '2019-03-01', color: 'red', editable: true },
  { title: 'Event', start: '2019-02-03', end: '2019-02-04', color: 'blue', editable: true },
  { title: 'Event', start: '2019-02-04', end: '2019-02-07', color: 'green', editable: true },
  { title: 'Event', start: '2019-02-14', end: '2019-02-16', color: 'purple', editable: true },
  { title: 'Event', start: '2019-02-15', end: '2019-02-16', color: 'black', editable: true },
]

$('#calendar').fullCalendar({
  locale: 'fr',
});

function addEvent(event) {
  $('#calendar').fullCalendar('renderEvent', event)
}

function injectEvents(events) {
  events.forEach((event) => {
    addEvent(event)
  })
}

injectEvents(events);

