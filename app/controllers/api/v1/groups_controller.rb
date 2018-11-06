class Api::V1::GroupsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @groups = Group.all
    render json: @groups
  end
  def show
  render json: Group.find(params[:id])
  end
  def create
    newGroup = Group.new(group_params)
    if newGroup.save
      render json: newGroup
    else
      render json: { errors: newGroup.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def group_params
      params.require(:group).permit(:title, :location, :description, :game, :start_date, :end_date, :donated_amount, :lat, :lng)
  end
end
