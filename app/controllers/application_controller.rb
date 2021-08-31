require "ffi"
require "date"
require "open3"
require "os"
require "execjs"
js = ExecJS.compile(File.read("js/index.js"))
puts js.call("add", 5, 5)
$extension = "dylib"
if Rails.env.production?
  if OS.linux?
    $extension = "so"
  end
end

module Rust
  extend FFI::Library
  ffi_lib "target/release/librust_api.#{$extension}"
  attach_function :pow, [:int32], :int32
  attach_function :gcd, [:int32, :int32], :int32
  attach_function :lcm, [:int32, :int32], :int32
  attach_function :k, [:int32], :int32
  attach_function :cpp, [], :int32
end

class ApplicationController < ActionController::Base
  def data(name)
    day = Date.today
    time = DateTime.now
    return{
            url: {
              controller: params[:controller],
              action: params[:action],
            },
            ip: request.remote_ip,
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
