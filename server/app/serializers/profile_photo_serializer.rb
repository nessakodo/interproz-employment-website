class ProfilePhotoSerializer < ActiveModel::Serializer
    attributes :id, :candidate_id, :image_url
  
  end