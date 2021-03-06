class Api::UsersController < ApplicationController 

    def create 
        # debugger
        @user = User.new(user_params)
        # debugger
        if @user.save 
            # debugger
            login(@user) 
            render :show
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show 
        @user = User.find(params[:id]) 
    end

    def find_user
        @user = User.where(email: params[:user][:email])
        unless @user.empty?
            render json: [@user[0].email]
        else 
            render json: [], status: 404 # render json: ["check your email"], status: 404
        end
    end

    private 

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname)
    end

end