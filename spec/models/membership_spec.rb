require 'rails_helper'

RSpec.describe Membership, type: :model do
  it { should have_valid(:group_id).when(1) }
  it { should have_valid(:user_id).when(1) }
end
