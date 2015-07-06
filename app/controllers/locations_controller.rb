class LocationsController < ApplicationController
  def resultMap
        @latitude = params[:latitude]     #緯度
        @longitude = params[:longitude]   #経度
        
        @station = Station.find_by(station_name: '梅島')
  end
end
