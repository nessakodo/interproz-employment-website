class Candidate < ApplicationRecord
    has_secure_password 
    
    has_many :interviews
    has_many :jobs, through: :interviews

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
end
