use std::ffi::CString;
pub fn name() -> CString {
    return CString::new("Linux").unwrap();
}
