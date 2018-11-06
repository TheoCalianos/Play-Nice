class AddingGeolocation < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :lat, :string, null: false
    add_column :groups, :lng, :string, null: false
  end
end
