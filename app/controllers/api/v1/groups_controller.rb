class Api::V1::GroupsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @groups = Group.all
    render json: @groups
  end
end
