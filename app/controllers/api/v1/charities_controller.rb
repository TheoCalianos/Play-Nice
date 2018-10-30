class Api::V1::CharitiesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    group = Group.find(params[:group_id])
    charities = beer.charities
    render json: charities
  end
end
