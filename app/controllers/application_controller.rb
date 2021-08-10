require "ffi"
require "date"

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
    day = Date.today
    time = DateTime.now
    return{
            name: name,
            time: {
              hour: time.hour,
              minute: time.minute,
              second: time.second,
            },
            day: {
              year: day.year,
              month: day.month,
              day: day.day,
            },
          }
  end
end
