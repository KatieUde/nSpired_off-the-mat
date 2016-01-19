require 'rails_helper'

RSpec.describe User, type: :model do
  let(:account){User.new(name:"Joe", email: "Joe@lala.com")}
    let(:acount_no_name){User.new(body:"no good")}
    let(:account_no_email){User.new(email:"lacking")}

  describe "validations for user" do
    it "saves a new user whne the fields are not blank" do
      expect{account.save}.to change{User.count}.by(1)

    end
  end
end
