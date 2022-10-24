class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :qualifications, :responsibilities, :type_of_hire, :description
end
