require "open3"
require "net/http"
require "uri"

class LineNotify
  TOKEN = "ruh7wTDgP9btB8HsEzz1K5TU2UzvdCCUIXZp1dX4sBd".freeze
  URL = "https://notify-api.line.me/api/notify".freeze

  attr_reader :message

  def self.send(message)
    new(message).send
  end

  def initialize(message)
    @message = message
  end

  def send
    Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |https|
      https.request(request)
    end
  end

  private

  def request
    request = Net::HTTP::Post.new(uri)
    request["Authorization"] = "Bearer #{TOKEN}"
    request.set_form_data(message: message)
    request
  end

  def uri
    URI.parse(URL)
  end
end

class MainController < ApplicationController
  def index
    o, _e, _s = Open3.capture3("python main.py")
    puts(Rust::k(9))
    LineNotify.send(params[:ip] || "特定不能")
    @python = o
    @rust = Rust::pow(8)
    @data = data("index")
  end

  def home
  end
end
