class JobsController < ApplicationController

    def index 
        render json: Job.all, status: :ok
    end

    def show
        job = Job.find_by(id: params[:id])
        render json: job, status: :accepted
    end


end
