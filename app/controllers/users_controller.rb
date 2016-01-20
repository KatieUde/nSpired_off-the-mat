class UsersController < ApplicationController
  before_action :logged_in_user, only: [:index, :edit, :update]
  before_action :correct_user, only: [:edit, :update]

  def index
    @users = User.paginate(page: params[:page])
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # handle successful save
      @user.send_activation_email
      flash[:info] = "Please check your email to activate your account."
      redirect_to root_url
      # log_in @user
      # flash[:success] = "Congrats on Signing up for nSpired -- off the mat!!"
      # redirect_to @user
    else
      render 'new'
    end
  end

  def edit
    # @user = User.find(params[:id])
  end

  def update
    # @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      # handle successful update
      flash[:success] = "Profile updated"
      redirect_to @user
    else
      render 'edit'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    # before filters
    # confirms a logged-in user
    def logged_in_user
      unless logged_in?
        store_location
        flash[:danger] = "Please log in to edit profile!"
        redirect_to login_url
    end
  end

    # confirmst the correct user
    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless @user == current_user
    end
end
