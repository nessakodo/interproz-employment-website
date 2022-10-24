class Candidate < ApplicationRecord
    has_many :interviews
    has_many :jobs, through: :interviews

    # easier password implementation
    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
end
