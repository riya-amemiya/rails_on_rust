require "ffi"

module Rust
  extend FFI::Library
  ffi_lib "target/release/librust_api.dylib"
  attach_function :pow, [:int32], :int32
  attach_function :gcd, [:int32, :int32], :int32
  attach_function :lcm, [:int32, :int32], :int32
  attach_function :k, [:int32], :int32
end

class ApplicationController < ActionController::Base
  def rails_to_react(name)
    return{
            name: name,
          }
  end
end
