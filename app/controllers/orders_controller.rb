require 'faraday'

class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    city = params[:city] || 'index'
    email = params[:email]
    lang = 'ua'

    order = Order.create city: city, email: email

    email_details = {
      emails: ["#{email}"]
    }
    auth_details = {
      "grant_type": "client_credentials",
      "client_id": ENV['SENDPULSE_API_CLIENT_ID'],
      "client_secret": ENV['SENDPULSE_API_CLIENT_SECRET']
    }

    auth_response = Faraday.post("https://api.sendpulse.com/oauth/access_token", auth_details)

    if auth_response.status == 200
      access_token = JSON.parse(auth_response.body)["access_token"]
      url = "https://api.sendpulse.com/addressbooks/#{ENV['SENDPULSE_API_ADDRESS_BOOK_ID']}/emails"
      headers = {
        "Content-Type" => 'application/json',
        "Authorization" => "Bearer #{access_token}"
      }

      add_response = Faraday.post(url, email_details.to_json, headers)

      if add_response.status == 200
        render json: {success: true}
      else
        render json: {success: false, error: JSON.parse(add_response.body)["message"]}, status: 500
      end
    else
      render json: {success: false, error: JSON.parse(auth_response.body)["message"]}, status: 500
    end
  end
end
