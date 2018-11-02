class Api::V1::CharitiesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    group = Group.find(params[:group_id])
    charities = group.charities
    render json: charities
  end
  def show
  render json: Charity.find(params[:id])
  end
  def create
    groupid = Group.last.id
    newCharity = Charity.new(charity_params)
    if newCharity.save
      Sponser.create(group_id: groupid, charity_id: Charity.last.id)
      render json: newCharity
    else
      render json: { errors: newCharity.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def charity_params
      params.require(:charity).permit(:name, :description, :url)
  end
end
