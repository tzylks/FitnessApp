class UserExercisesController < ApplicationController
    wrap_parameters format: []
    
    def index
        exercises = UserExercise.all
        render json: exercises
    end

    def create
        exercise = UserExercise.create!(obj_params)
        render json: exercise, status: :created
    end

    def show
        exercise = UserExercise.find(params[:id])
        render json: exercise
    end

    private

    def obj_params
        params.permit(:exercise_id, :user_id, :activity, :muscle_group)
    end
    
end

