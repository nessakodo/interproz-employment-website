class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_candidate
      Candidate.find_by(id: session[:candidate_id])
  end

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def render_not_found(error)
      render json: {errors: "#{error.model} Not Found"}, status: :not_found
  end

end