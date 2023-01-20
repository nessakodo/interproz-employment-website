class CreateAppliedJob < ActiveRecord::Migration[6.1]
  def change
    create_table :applied_jobs do |t|
      t.boolean :applied
      t.belongs_to :candidate, null: false, foreign_key: true
      t.belongs_to :job, null: false, foreign_key: true
      t.timestamps
    end
  end
end
