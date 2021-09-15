class TodayworkoutsController < ApplicationController
    def index
        todayworkouts = @user.todayworkouts
        render json: todayworkouts
    end

    def show
        workout = @user.todayworkouts.find(params[:id])
        render json: workout
    end

    def create
        workout = @user.todayworkouts.create!(obj_params)
        render json: workout, status: :created 
    end

    private

    def obj_params
        params.permit(:activity, :muscle_group, :reps, :sets, :user_id,)
    end
end
