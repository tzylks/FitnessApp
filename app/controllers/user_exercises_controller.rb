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

    def destroy
        delete_workout = UserExercise.find(params[:id])
        delete_workout.destroy
        head :no_content
    end

    private

    def obj_params
        params.permit(:exercise_id, :user_id, :activity, :muscle_group, :image)
    end

end

