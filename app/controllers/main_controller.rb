require "ffi"
require "open3"

module Rust
  extend FFI::Library
  ffi_lib "target/release/librust_api.dylib"
  attach_function :pow, [:int32], :int32
end

class MainController < ApplicationController
  def index
    o, _e, _s = Open3.capture3("python main.py")
    puts(Rust::pow(8))
    @python = o
    @rust = Rust
  end

  def home
  end
end
