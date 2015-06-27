require 'test_helper'

class LocationsControllerTest < ActionController::TestCase
  test "should get resultMap" do
    get :resultMap
    assert_response :success
  end

end
