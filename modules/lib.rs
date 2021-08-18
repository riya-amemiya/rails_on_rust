//! all_programming_net
//! # Document
//! プログラミング言語の壁を超えろ

mod os;
use std::collections::HashMap;
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
pub extern "C" fn gcd(mut x: i32, mut y: i32) -> i32 {
    if x == 0 || y == 0 {
        return 0;
    }
    //最大公約数
    let tmp: i32;
    if y < x {
        tmp = y;
        y = x;
        x = tmp;
    }
    /* ユークリッドの互除法 */
    let mut r = y % x;
    while r != 0 {
        y = x;
        x = r;
        r = y % x;
    }
    return x;
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
pub extern "C" fn os_name() -> i32 {
    return os::name();
}
#[no_mangle]
pub fn ajax() -> Result<(), Box<dyn std::error::Error>> {
    let resp =
        reqwest::blocking::get("https://httpbin.org/ip")?.json::<HashMap<String, String>>()?;
    println!("{:#?}", resp["origin"]);
    return Ok(());
}
/// c呼び出し
extern "C" {
    fn foo(x: i32, y: i32, z: i32) -> i32;
}
#[no_mangle]
pub extern "C" fn math(x: i32, y: i32, z: i32) -> i32 {
    unsafe {
        return foo(x, y, z);
    };
}
#[test]
#[ignore]
fn math_test() {}