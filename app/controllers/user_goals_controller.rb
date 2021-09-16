class UserGoalsController < ApplicationController
    def index
        render json: @user.user_goals
    end

    def create
        if params[:user_id]
            goals = @user.user_goals.create!(user_goal_params)
            render json: goals, status: :created
        end
    end


    # if params[:dog_house_id]
    #     dog_house = DogHouse.find(params[:dog_house_id])
    #     reviews = dog_house.reviews
    #   else
    #     reviews = Review.all
    #   end
    #   render json: reviews, include: :dog_house

    def update
        if params[:user_goal_id] && params[user_id]
        goals = @user.update!(user_goal_params)
        render json: goals, status: :accepted
        end
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