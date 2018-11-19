require 'rails_helper'

RSpec.describe Sponser, type: :model do
  it { should have_valid(:group_id).when(1) }
  it { should have_valid(:charity_id).when(1) }
end
