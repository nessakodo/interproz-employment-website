class AppliedJobSerializer < ActiveModel::Serializer
    attributes :id, :applied, :job_name, :candidate_name
  
    has_one :candidate
    has_one :job
  
    def job_name
      "#{object.job.name}"
    end
  
    def candidate_name
      "#{object.candidate.name}"
    end
  
  end