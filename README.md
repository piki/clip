Have you ever wished a paperclip would tell you what project you're
building?

```hcl
action "clip" {
  uses="piki/clip@eebaae26bf51
}
action "your actual task" {
  uses="..."
  needs="clip"
}
```
