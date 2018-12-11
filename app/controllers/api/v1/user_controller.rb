class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def show
  end
end
