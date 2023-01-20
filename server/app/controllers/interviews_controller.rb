class InterviewsController < ApplicationController

    def create 
        interview = Interview.create!(interview_params)
        render json: interview.candidate, status: :created
    end


    def destroy 
        interview = Interview.find(params[:id])
        interview.destroy
        head :no_content
    end



    private 

    def interview_params
        params.permit(:name, :email, :phone, :date, :format, :candidate_id, :job_id)
    end

end
