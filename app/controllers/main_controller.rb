require "open3"

class MainController < ApplicationController
  def index
    o, _e, _s = Open3.capture3("python main.py")
    puts(Rust::k(9))
    secret = Rails.application.key_generator.generate_key("salt", 32)
    crypt = ActiveSupport::MessageEncryptor.new(secret)

    now = Time.zone.now
    @python = o
    @rust = Rust::pow(8)
    @data = crypt.encrypt_and_sign(data("index"), expires_at: now + 10.seconds)
  end

  def home
  end

  def hello
    render :json => {
      Hello: "Hello World",
    }
  end
end
