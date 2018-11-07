class Api::V1::MembershipsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def create
    newMembership = Membership.new(membership_params)
    if newMembership.save
      render json: newMembership
    else
      render json: { errors: newMembership.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def membership_params
      params.require(:membership).permit(:group_id).merge(user_id: current_user.id)
  end
end
