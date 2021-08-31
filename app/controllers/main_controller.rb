require "open3"

class MainController < ApplicationController
  def index
    o, _e, _s = Open3.capture3("python main.py")
    puts(Rust::cpp())
    @python = o
    puts("#{_e}")
    @rust = Rust::pow(8)
    @data = data("index")
  end

  def home
  end

  def hello
    render :json => {
      Hello: "Hello World",
    }
  end
end
