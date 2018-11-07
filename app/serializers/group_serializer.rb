class GroupSerializer < ActiveModel::Serializer
  attributes :id, :location, :title, :description, :game, :start_date, :end_date, :donated_amount, :charity_name, :lat, :lng, :creator, :attendies
  has_many :charities
  def charity_name
    names = []
    object.charities.each do |charity|
      names << charity.name
    end
    return names
  end
  def creator
    creator = object.users.first
    return creator
  end
  def attendies
    attendies = object.users
    return attendies
  end
end
