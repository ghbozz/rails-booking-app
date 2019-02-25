//= require rails-ujs
//= require_tree .

//= require jquery
//= require jquery_ujs

//= require moment
//= require fullcalendar
//= require fullcalendar/locale-all

const events = [
  { title: 'Event', start: '2019-02-27', end: '2019-03-01', color: 'red', editable: true },
  { title: 'Event', start: '2019-02-01', end: '2019-02-01', color: 'blue', editable: true },
  { title: 'Event', start: '2019-02-04', end: '2019-02-07', color: 'green', editable: true },
  { title: 'Event', start: '2019-02-14', end: '2019-02-16', color: 'purple', editable: true },
  { title: 'Event', start: '2019-02-15', end: '2019-02-16', color: 'black', editable: true },
  { title: 'Event', start: '2019-02-07', end: '2019-02-08', color: 'orange', editable: true },
  { title: 'Event', start: '2019-02-11', end: '2019-02-13', color: 'yellow', editable: true },
]

$('#calendar').fullCalendar({
  locale: 'fr',
  selectable: true,
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  },
  dayClick: function(date) {
    alert('clicked ' + date.format());
  },
  select: function(startDate, endDate) {
    alert('selected ' + startDate.format() + ' to ' + endDate.format());
  }
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

