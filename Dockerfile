FROM debian:stable-slim

LABEL "name"="clip"
LABEL "maintainer"="Patrick Reynolds <piki@github.com>"
LABEL "version"="1.9.9.6"

LABEL "com.github.actions.name"="Talking Paperclip for GitHub Actions"
LABEL "com.github.actions.description"="Can a paperclip help your CI?  Of course."
LABEL "com.github.actions.icon"="paperclip"
LABEL "com.github.actions.color"="gray-dark"

COPY run.sh /run.sh

ENTRYPOINT ["/run.sh"]
