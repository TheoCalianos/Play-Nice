class Api::V1::GroupsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @groups = Group.all.order(:created_at).reverse_order
    render json: @groups
  end
  def show
  render json: Group.find(params[:id])
  end
  def create
    newGroup = Group.new(group_params)
    if newGroup.save
      Membership.create(group_id: newGroup.id, user_id: current_user.id)
      render json: newGroup
    else
      render json: { errors: newGroup.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def group_params
      params.require(:group).permit(:title, :location, :description, :game, :start_date, :end_date, :donated_amount, :lat, :lng)
  end
end
