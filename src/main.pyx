import PySimpleGUI as sg
import time
from ctypes import cdll
import asyncio
cdef ajax():
    lib = cdll.LoadLibrary("target/release/librust_api.dylib")
    print(lib.math(2,2,5))
    del lib

cdef show_time():
    return time.strftime('%I:%M')

cdef window():
    # Add your new theme colors and settings
    my_new_theme = {
        'BACKGROUND': '#ffffff',
        'TEXT': '#000000',
        'INPUT': '#ffffff',
        'TEXT_INPUT': '#000000',
        'SCROLL': '#c7e78b',
        'BUTTON': ('black', '#ffffff'),
        'PROGRESS': ('#01826B', '#D0D0D0'),
        'BORDER': 1,
        'SLIDER_DEPTH': 0,
        'PROGRESS_DEPTH': 0
    }

    # Add your dictionary to the PySimpleGUI themes
    sg.theme_add_new('MyNewTheme', my_new_theme)

    # Switch your theme to use the newly added one. You can add spaces to make it more readable
    sg.theme('My New Theme')  # デザインテーマの設定
    # ウィンドウに配置するコンポーネント
    layout = [
        # [sg.Button(
        #     'Quit', pad=((left, right), (top, bottom)), size=(20, 1))],
        [sg.Text("Test", font=("IPAゴシック", 25))],
        [sg.Text("Hello"), sg.InputText()],
        [sg.Text("2"), sg.InputText()],
        [sg.Button('OK', size=(20, 1))]]

    # ウィンドウの生成
    window = sg.Window('Test', layout, size=(
        600, 400), element_justification='c')
    del layout

    # イベントループ
    while True:
        event, values = window.read(timeout=1000, timeout_key='-timeout-')
        if event == sg.WIN_CLOSED or event == 'Quit':
            break
        elif event == 'OK':
            print(f'{values}')
        elif event in '-timeout-':
            show_time()
    window.close()
cpdef main():
    window()
    ajax()

