class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def current_candidate
      Candidate.find_by(id: session[:candidate_id])
  end

<<<<<<< HEAD
  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def render_not_found(error)
      render json: {errors: "#{error.model} Not Found"}, status: :not_found
  end

=======


    private

  
    def render_not_found invalid
        render json: {error: "#{invalid.model} not found"}, status: :not_found
        
    end


    def render_unprocessable_entity invalid 
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end 
  
>>>>>>> origin/cassidy
end