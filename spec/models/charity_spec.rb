require 'rails_helper'
RSpec.describe Charity, type: :model do
  it { should have_valid(:name).when("Doctors with out borders") }
  it { should_not have_valid(:name).when(nil, "") }
  it { should_not have_valid(:url).when(nil, "") }
  it { should have_valid(:url).when("https://donate.doctorswithoutborders.org/onetime.cfm?source=ADD180U0U01&utm_source=AdWords&utm_medium=ppc&utm_campaign=GooglePaid&utm_content=branded&gclid=EAIaIQobChMI4fm0-97Z3gIVpP_jBx3PXAxEEAAYASAAEgKXCvD_BwE&utm_expid=.ACVuR8QfQoWRpTdJzwfNnQ.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F") }
  it { should have_valid(:description).when("doctors go to third world countries and help them.") }
  it { should_not have_valid(:description).when(nil, "") }

end
