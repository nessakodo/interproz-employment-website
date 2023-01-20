class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :name
      t.string :qualifications
      t.string :responsibilities
      t.string :type_of_hire
      t.string :description

      t.timestamps
    end
  end
end
