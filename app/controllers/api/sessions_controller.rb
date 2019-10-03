class Api::SessionsController < ApplicationController 

    def create 
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if @user
            # debugger
            login(@user) 
            render 'api/users/show'
            # debugger
        else 
            # debugger
            render json: ['Sorry! That was a wrong email/password, please try again.'], status: 401
        end
    end 

    def destroy 
        if current_user
            logout
            render json: {}
        else 
            render json ['You are not logged in'], status: 404
        end
    end 
end

