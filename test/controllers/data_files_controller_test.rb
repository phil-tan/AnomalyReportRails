require "test_helper"

class DataFilesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get data_files_index_url
    assert_response :success
  end

  test "should get new" do
    get data_files_new_url
    assert_response :success
  end

  test "should get create" do
    get data_files_create_url
    assert_response :success
  end

  test "should get destroy" do
    get data_files_destroy_url
    assert_response :success
  end
end
