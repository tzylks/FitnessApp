class ExercisesController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def index
        all_exercises = Exercise.all
        render json: all_exercises
    end

    def update
        exercise = Exercise.update!(work_out_params)
        render json: exercise, status: :accepted
    end

    def create
        new_workout = Exercise.create!(work_out_params)
        render json: new_workout, status: :created
    end

    def destroy
        delete_workout = Exercise.find(params[:id])
        delete_workout.destroy
        head :no_content
    end
    
    private 

    def work_out_params
        params.permit(:activity, :muscle_group)
    end

end
