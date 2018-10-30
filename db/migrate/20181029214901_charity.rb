class Charity < ActiveRecord::Migration[5.2]
  def change
    create_table :charities do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.string :description, null: false
    end
  end
end
