class Job < ApplicationRecord
    has_many :applied_jobs
    has_many :candidates, through: :applied_jobs
end
