require 'rails_helper'
RSpec.describe Charity, type: :model do
  it { should have_valid(:name).when("Julius") }
  it { should_not have_valid(:url).when(nil, "") }
  it { should have_valid(:description).when(5) }
end
