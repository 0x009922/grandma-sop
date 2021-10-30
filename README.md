# sop

Стандартные операционные процедуры

## ffmpeg recipes

resize:

```
ffmpeg -i input.avi -s 720x480 -c:a copy output.mkv
ffmpeg -i input.avi -filter:v scale=720:-1 -c:a copy output.mkv
```

> -1 means to automatically set relative value (width/height)

Cut:

```
ffmpeg -i input.mp4 -ss 00:01:41 -to 00:02:06 -c copy output.mp4
```
