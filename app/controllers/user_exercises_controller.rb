class UserExercisesController < ApplicationController
    wrap_parameters format: []
    def create
        exercise = UserExercise.create!(obj_params)
        render json: exercise, status: :created
    end

    private

    def obj_params
        params.permit(:exercise_id, :user_id, :activity, :muscle_group)
    end
end

