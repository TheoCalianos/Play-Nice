class Api::V1::GroupsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Group.all
  end
end
