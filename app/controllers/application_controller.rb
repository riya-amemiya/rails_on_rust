require "ffi"

module Rust
  extend FFI::Library
  ffi_lib "target/release/librust_api.dylib"
  attach_function :pow, [:int32], :int32
end

class ApplicationController < ActionController::Base
end
