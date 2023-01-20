class CandidateWithAppliedJobs < ActiveModel::Serializer
    attributes :id, :name, :email, :password
    has_many :applied_jobs
  end
  