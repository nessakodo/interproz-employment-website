class SessionsController < ApplicationController

    def create
        candidate = Candidate.find_by(email: params[:email])
        if candidate&.authenticate(params[:password])
          session[:candidate_id] = candidate.id
          render json: candidate, status: :ok
        else
            render json: {error: "Invalid Credentials"}, status: :unauthorized
        end
      end

# Login
      def logged_in
        if current_candidate.valid?
          render json: current_candidate, status: :ok
        else
          render json: { 
            error: "Candidate not logged in",
            logged_in: false,
            status: :unauthorized
          }
        end
      end
      
#   Logout
      def destroy
        session.delete :candidate_id
      end

end