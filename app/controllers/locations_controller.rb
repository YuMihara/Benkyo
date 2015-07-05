class LocationsController < ApplicationController
  def resultMap
        
        @station = Station.find_by(station_name: '梅島')
  end
end
