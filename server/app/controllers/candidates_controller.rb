class CandidatesController < ApplicationController

    def index
        candidates = Candidate.all 
        render json: candidates, status: :ok
    end

    def show
        candidate = Candidate.find_by(id: params[:id])
        render json: candidate, status: :accepted
    end

    
    def create
        candidate = Candidate.create!(candidate_params)
        if candidate.valid?
            session[:candidate_id] = candidate.id 
            render json: candidate, status: :created
        else
            render json: candidate.errors.full_messages, status: :unprocessable_entity
        end
    end


    def update
        @candidate.update!(candidate_params)
        render json: @candidate, status: :accepted
      end

private

    def candidate_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end

