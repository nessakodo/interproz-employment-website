class CreateAppliedJob < ActiveRecord::Migration[6.1]
  def change
    create_table :applied_jobs do |t|
      t.integer :candidate_id
      t.integer :job_id
      t.boolean :applied

      t.timestamps
    end
  end
end
