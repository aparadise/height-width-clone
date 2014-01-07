## Height Width Clone

by Andre

The purpose of the script example is for...<br>
I have wrapper that loads dynamic video feeds from a provider.<br>
But sometimes the video is larger then the wrapper or it's not taking up the full height and width leaving a gap of space.<br>
so to fix this issue if you know the id or class of the child-element you can force the child element to take up the full space of the wrapper
having a nice clean container.

------
### Install

```bash
$ git clone https://github.com/aparadise/height-width-clone.git
```

------
### Testing

Load the ./test/index.html and click 'Load Video'.

MSN videos will not appear for pages loaded through file protocol (file:///), so there's some additional setup.

Use Apache, which comes with OSX:

 1. Create a symlink to the cloned repository
    ```bash
    $ sudo ln -s /Users/chrisdep/Software/height-width-clone /Library/WebServer/Documents/height-width-clone
    ```

 2. Start Apache
    ```bash
    sudo apachectl start
    ```

 3. Request 'localhost/test/' with your browser

