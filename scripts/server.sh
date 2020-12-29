#!/bin/bash

cd ../
if [ "$1" == "kill" ]; then
	echo "Killing server..."
	lsof -P | grep ':8080' | awk '{print $2}' | xargs kill -9
elif [ "$1" == "clean" ]; then
	echo "Starting server (cleaning db)..."
	dev_appserver.py app.yaml --log_level=debug --clear_datastore=yes --enable_host_checking
else
	echo "Starting server..."
	/Users/meed/dev/google-cloud-sdk/bin/dev_appserver.py /Users/meed/dev/flow-dashboard/app.yaml --log_level=debug --enable_host_checking --enable_console
fi