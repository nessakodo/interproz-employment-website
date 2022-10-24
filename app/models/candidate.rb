class Candidate < ApplicationRecord
    has_secure_password 
    
    has_many :interviews
    has_many :jobs, through: :interviews
end
