class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :goal_amount,:image_url, :current_amount, :start_date, :end_date

  has_many :reviews
end
