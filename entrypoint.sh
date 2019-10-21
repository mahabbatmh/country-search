#!/bin/bash
echo "Production mode is $PRODUCTION"

if [ "$PRODUCTION" = "false" ]; then
    yarn run start
else
    yarn run build
    serve -s build -l 3000
fi
