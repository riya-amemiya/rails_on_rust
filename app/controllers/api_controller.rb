class ApiController < ApplicationController
  def index
    render :json => {
      data: Rust::pow(8),
    }
  end
end
