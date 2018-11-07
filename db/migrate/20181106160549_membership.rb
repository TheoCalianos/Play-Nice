class Membership < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.belongs_to :group
      t.belongs_to :user
    end
  end
end
