class Groups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :location, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :game, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.string :donated_amount, numericality: true , null: false

      t.timestamps null: false
    end
  end
end
