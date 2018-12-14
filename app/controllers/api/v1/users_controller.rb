class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def show
     @user = User.find(current_user.id)
     @userGroups = @user.groups
     render json: @userGroups
  end
end
