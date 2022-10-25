class AppliedJobsController < ApplicationController

    def show
        apply = AppliedJob.find(params[:id])
        render json: apply, status: :ok
    end

    def create
        apply = AppliedJob.create(applied_params)
        render json: apply, status: :created
    end

    def destroy
        apply = AppliedJob.find(params[:id])
        apply.destroy
    end

private

    def applied_params
        params.permit(:candidate_id, :job_id, :applied)
    end
end