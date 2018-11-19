require 'rails_helper'

RSpec.describe Group, type: :model do
  it { should have_valid(:location).when("boston") }
  it { should_not have_valid(:location).when(nil, "") }
  it { should_not have_valid(:title).when(nil, "") }
  it { should have_valid(:title).when("The super slam time") }
  it { should have_valid(:description).when("A fun time with friends") }
  it { should_not have_valid(:description).when(nil, "") }
  it { should have_valid(:game).when("Overwatch") }
  it { should_not have_valid(:game).when(nil, "") }
  it { should have_valid(:start_date).when("2018-11-09") }
  it { should_not have_valid(:start_date).when(nil, "") }
  it { should have_valid(:end_date).when("2018-11-10") }
  it { should_not have_valid(:end_date).when(nil, "") }
  it { should have_valid(:donated_amount).when(5) }
  it { should_not have_valid(:donated_amount).when(nil, "") }
  it { should have_valid(:lat).when("42.277634") }
  it { should have_valid(:lng).when("-71.013462") }
end
