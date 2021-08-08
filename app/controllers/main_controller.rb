require "open3"

class MainController < ApplicationController
  def index
    o, _e, _s = Open3.capture3("python main.py")
    puts(Rust::k(9))
    @python = o
    @rust = Rust::pow(8)
  end

  def home
  end
end
