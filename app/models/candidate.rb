class Candidate < ApplicationRecord
    has_secure_password 
    
    has_many :interviews
    has_many :applied_jobs
    has_many :jobs, through: :applied_jobs
    has_many :profile_photos

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
end
