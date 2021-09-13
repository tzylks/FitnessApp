class UserGoalsController < ApplicationController

    def create
        goals = UserGoal.create!(user_goal_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        goals = @user.update!(user_goal_params)
        render json: goals, status: :accepted
    end

    # def destroy
    #     goals = UserGoal.find_by(id: params[id])
    #     goals.destroy
    #     head :no_content
    # end

private  

    def user_goal_params
        params.permit(:target_physique, :target_bmi, :target_weight, :tone_sculpt)
    end
end