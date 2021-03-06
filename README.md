# screen-graber

Command line tool to create screen grabs from videos.

<img src='https://david-dm.org/ianaya89/screen-grabber.svg'/>
[![npm version](https://badge.fury.io/js/screen-graber.svg)](http://badge.fury.io/js/screen-graber)

### Installation

```
npm install -g screen-graber
```

### Options
```
-h, --help                 Output usage information
-V, --version              Output the version number
-s, --source [value]       Set source video path. (required)
-d, --destination [value]  Set screen grabs destination path. (required)
-q, --quantity <n>         Set the desired screen grabs quantity. (default is 10)
```

### Usage
Default usage: ```-s``` and ```-d``` parametter are required.
```
screen-graber -s "my/video/path" -d "my/screen/grabs/path"
```

Setting the screen grabs quantity ```-q```, the default value is 10.
```
screen-graber -s "my/video/path" -d "my/screen/grabs/path" -q 17
```

### Output

<p style="text-align: center">
  <img src="img/output.png" alt="output">
</p>

### TODO
By the moment you can not choose the frame or time of the desired screen grab.

The tool chooses take the screen grabs, dividing the video duration time by the quantity parameter.

I will add in the next version, the capability of set the desired frame rate or time


