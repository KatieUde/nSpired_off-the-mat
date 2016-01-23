class SessionsController < ApplicationController
  def new
    p 'chunka chunkja'
    # check for post or get
    # do an if...
    # ...if get, render view
    # else
    # post that shit
    # ...create method actions
  end

  def create
    p params
    p "i did ittttt"
    user = User.find_by(email: params[:session][:email].downcase)
      if user && user.authenticate(params[:session][:password])
        # Log in the user and redirect to the user's show page
        if user.activated?
          log_in user
          params[:session][:remember_me] == '1' ? remember(user) : forget(user)
          redirect_to "/users/#{user.id}"
        else
          message = "Account not activated. "
          message += "Check your email for the activation link."
          flash[:notice] = message
          redirect_to root_url
        end
        # Create an error message
      else
        flash.now[:notice] = 'Invalid email & password combination'
        render 'new'
      end
    end

  def destroy
    log_out if logged_in?
    # redirect_to root_url
    render 'destroy'
  end
end
