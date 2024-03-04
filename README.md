# Modified pitch-shift & slow-downer

Runs on Windows/macOS/Linux/Android/iOS

Based on [SoundTouchJS](https://github.com/cutterbl/SoundTouchJS)

## Changes

Modified the functionality of the original repo so that:
- Aesthetics: the UI has a cleaner, more user-friendly appearance
- Functionality: the granularity of the time-controls is finer
- Implementation: it receives an audio file as a prop, so that it can have hard-coded files on page-load, or custom-uploaded files

## Usage
Note that these updated files work for a NextJS project, which is why for example the CSS file is named as "SlowDowner.module.css", and the classes are designated with "className" instead of the usual React style of "class". To tweak this for a normal React project, the class wording in the HTML will have to be adjusted as well as the CSS file having being renamed as a normal CSS file.

![ScreenShot](https://raw.githubusercontent.com/blah148/pitch-shifter/daf72c07efc8fab99dcb75aa08b34e7990e0e0e0/Screenshot%20from%202024-03-03%2022-59-06.png)
