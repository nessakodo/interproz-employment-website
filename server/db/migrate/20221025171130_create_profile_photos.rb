class CreateProfilePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :profile_photos do |t|
      t.integer :candidate_id

      t.timestamps
    end
  end
end
