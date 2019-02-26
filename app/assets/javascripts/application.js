//= require rails-ujs
//= require_tree .

//= require jquery
//= require jquery_ujs

//= require moment
//= require fullcalendar
//= require fullcalendar/locale-all
//= require daterangepicker


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

if (document.getElementById('calendar')) {
  injectEvents(gon.events)
}


/////// DATE RANGE PICKER //////////

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


