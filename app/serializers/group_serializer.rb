class GroupSerializer < ActiveModel::Serializer
  attributes :id, :location, :title, :description, :game, :start_date, :end_date, :donated_amount, :charity_name, :lat, :lng, :attendies
  has_many :charities
  def charity_name
    names = []
    object.charities.each do |charity|
      names << charity.name
    end
    return names
  end
  def attendies
    attendies = object.users
    return attendies
  end
end
