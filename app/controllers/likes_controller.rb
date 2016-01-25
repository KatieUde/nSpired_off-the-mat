class LikesController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user, only: :destroy

  def new
    @like = Like.new
  end

  def create
    @like = Like.new
    @like.quote_content = params[:quote_content]
    @like.quote_author = params[:quote_author]
    @like.user_id = params[:user_id]
    if @like.save
      flash[:success] = "Liking this quote saved it to your profile!"
      redirect_to quote_url
    else
      redirect_to root_url
    end
  end

  def destroy
    @like.destroy
    flash[:success] = "Quote removed from list of favorites."
    redirect_to request.referrer || root_url
  end

  private


    def correct_user
      @like = current_user.likes.find_by(id: params[:id])
      redirect_to root_url if @like.nil?
    end
end
