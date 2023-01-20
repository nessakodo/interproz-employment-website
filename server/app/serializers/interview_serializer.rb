class InterviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :date, :format
  has_one :candidate
  has_one :job
end
