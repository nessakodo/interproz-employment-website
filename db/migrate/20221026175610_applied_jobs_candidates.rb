class AppliedJobsCandidates < ActiveRecord::Migration[6.1]
  def change
    create_table :applied_jobs_candidates, :id => false do |t|
      t.integer :applied_job_id
      t.integer :candidate_id
    end
  end
end