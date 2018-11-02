require 'rails_helper'

RSpec.describe Group, type: :model do
  it { should have_valid(:location).when("boston") }
  it { should_not have_valid(:title).when(nil, "") }
  it { should have_valid(:description).when("American IPA") }
  it { should_not have_valid(:game).when(nil, "") }
  it { should_not have_valid(:start_date).when(nil, "") }
  it { should_not have_valid(:end_date).when(nil, "") }
  it { should_not have_valid(:donated_amount).when(nil, "") }
end
