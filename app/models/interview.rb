class Interview < ApplicationRecord
  belongs_to :candidate
  belongs_to :job
end
