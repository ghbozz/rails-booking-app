class EventsController < ApplicationController
  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.save
    redirect_to :root
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_date, :end_date)
  end
end
