/* Generated by Cython 0.28.2 */

#ifndef __PYX_HAVE__python_modules
#define __PYX_HAVE__python_modules


#ifndef __PYX_HAVE_API__python_modules

#ifndef __PYX_EXTERN_C
  #ifdef __cplusplus
    #define __PYX_EXTERN_C extern "C"
  #else
    #define __PYX_EXTERN_C extern
  #endif
#endif

#ifndef DL_IMPORT
  #define DL_IMPORT(_T) _T
#endif

__PYX_EXTERN_C int c_pow(int, int __pyx_skip_dispatch);
__PYX_EXTERN_C int c_add(int, int __pyx_skip_dispatch);

#endif /* !__PYX_HAVE_API__python_modules */

/* WARNING: the interface of the module init function changed in CPython 3.5. */
/* It now returns a PyModuleDef instance instead of a PyModule instance. */

#if PY_MAJOR_VERSION < 3
PyMODINIT_FUNC initpython_modules(void);
#else
PyMODINIT_FUNC PyInit_python_modules(void);
#endif

#endif /* !__PYX_HAVE__python_modules */
