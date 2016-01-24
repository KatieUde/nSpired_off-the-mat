class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper

  private

  # occurs in before filters (users_controller)
  # confirms a logged-in user
  def logged_in_user
    unless logged_in?
      store_location
      flash[:danger] = "Please log in to edit profile!"
      redirect_to login_url
    end
  end
end

  # Controller names use a PLURAL convention
  # Model names use a SINGULAR convention
