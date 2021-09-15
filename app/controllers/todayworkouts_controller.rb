class TodayworkoutsController < ApplicationController
    def index
        render json: Todayworkout.all
    end

    def show
        workout = Todayworkout.find(params[:id])
        render json: workout
    end

    def create
        workout = Todayworkout.create!(obj_params)
        render json: workoutout, status: :created 
    end

    private

    def obj_params
        params.permit(:activity, :muscle_group, :reps, :sets, :user_id,)
    end
end
