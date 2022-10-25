class JobsController < ApplicationController

    def index 
        render json: Job.all, status: :ok
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job, status: :accepted
    end

    def remove
        AppliedJob.where(job_id: params[:job], candidate_id: params[:candidate]).destroy_all
        render json: "you have removed this opportunity", status: :accepted
    end


end
