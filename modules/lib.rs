//! all_programming_net
//! # Document
//! プログラミング言語の壁を超えろ
mod include;
mod os;

use std::ffi::{CStr, CString};

use include::{c_cpp::*, c_hello::*, c_math::*, c_random::*};
use libc::c_char;
#[no_mangle]
pub extern "C" fn hello() -> i32 {
    unsafe { return c_hello() }
}
///xの二乗
#[no_mangle]
pub extern "C" fn pow(x: i32) -> i32 {
    return x * x;
}
#[test]
fn pow_test() {
    assert_eq!(pow(8), 64);
    assert_eq!(pow(5), 25)
}
///xとyの最大公約数
#[no_mangle]
pub extern "C" fn gcd(x: i32, y: i32) -> i32 {
    unsafe {
        return c_gcd(x, y);
    };
}
#[test]
fn gcd_test() {
    assert_eq!(gcd(8, 9), 1);
}
///xとyの最小公倍数
#[no_mangle]
pub extern "C" fn lcm(mut x: i32, mut y: i32) -> i32 {
    if x == 0 || y == 0 {
        return 0;
    }
    let tmp: i32;
    if y < x {
        tmp = y;
        y = x;
        x = tmp;
    }
    return (x / gcd(x, y)) * y;
}
#[test]
fn lcm_test() {
    assert_eq!(lcm(3, 9), 9);
}
///xからyまでの階乗
#[no_mangle]
pub extern "C" fn fact(x: i32, y: i32) -> i32 {
    if x == 0 || x < y {
        if y == 0 {
            return 0;
        }
        return 1;
    } else {
        return x * fact(x - 1, y);
    }
}
#[test]
fn fact_test() {
    assert_eq!(fact(3, 1), 6);
    assert_eq!(fact(4, 1), 24)
}
///ケルビン温度
#[no_mangle]
pub extern "C" fn k(x: i32) -> i32 {
    return x + 273;
}
/// xとyの割り算の解(あまりなし)
#[no_mangle]
pub extern "C" fn quotient_not_surplus(x: i32, y: i32) -> i32 {
    return (x - (x % y)) / y;
}
#[test]
fn quotient_not_surplus_test() {
    assert_eq!(quotient_not_surplus(9, 3), 3);
    assert_eq!(quotient_not_surplus(-3, 3), -1);
    assert_eq!(quotient_not_surplus(-3, -3), 1);
    assert_eq!(quotient_not_surplus(10, 3), 3);
}
/// os判定
#[no_mangle]
pub extern "C" fn os_name() -> *const c_char {
    return os::name().as_ptr();
}

#[no_mangle]
pub extern "C" fn math(x: i32, y: i32, z: i32) -> i32 {
    unsafe {
        return c_math(x, y, z);
    };
}
#[test]
#[ignore]
fn math_test() {}
///x(最大),y(最小)の範囲の乱数
#[no_mangle]
pub extern "C" fn random(x: i32, y: i32) -> i32 {
    unsafe {
        return c_random(x, y);
    };
}
#[no_mangle]
pub extern "C" fn cpp() -> i32 {
    unsafe {
        return c_cpp();
    };
}
#[no_mangle]
pub extern "C" fn nCr(x: i32, y: i32) -> i32 {
    unsafe {
        return c_nCr(x, y);
    };
}
#[no_mangle]
pub extern "C" fn nPr(x: i32, y: i32) -> i32 {
    unsafe {
        return c_nPr(x, y);
    };
}
#[no_mangle]
pub extern "C" fn DN_to_BN(x: *const c_char) -> *const c_char {
    let n = unsafe { CStr::from_ptr(x).to_str().unwrap().to_owned() };
    let y = CString::new(n).unwrap();
    return y.as_ptr();
}
