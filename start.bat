@echo off
echo --- Server is starting ---
set DEBUG=multitube:* & nodemon bin/www
pause
