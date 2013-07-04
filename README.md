static-jenkins-skeleton
=======================

The skeleton project for deploying static files with Jenkins integration. 

Requirements
------------

* grunt v4 or later
* compass

Usage
-----

Write down this shell srcipt on `Execute Shell` in your Jenkins job.
```
SERVER=IP of your Server
TARGET_DIR=${WORKSPACE}
CSS=${TARGET_DIR}/css/*.css
JS=${TARGET_DIR}/build/*.js
IMG=${TARGET_DIR}/img/sprite/
APACHE_PATH=/path/to/apache
ID_RSA_PATH=/path/to/jenkins/.ssh/id_rsa

# grunt for js
chmod 700 sh/jenkins-grunt.sh
${TARGET_DIR}/sh/jenkins-grunt.sh

# compass for css
export PATH=/usr/local/bin:$PATH;
compass compile sass/

# rsync
# css
rsync -avz -e ssh ${CSS} user@${SERVER}:${APACHE_PATH}/htdocs/web/css/
ssh -i ${ID_RSA_PATH} user@${SERVER} chmod 777 ${APACHE_PATH}/htdocs/web/css/*

# js
rsync -avz -e ssh ${JS} user@${SERVER}:${APACHE_PATH}/htdocs/web/js/
ssh -i ${ID_RSA_PATH} user@${SERVER} chmod 777 ${APACHE_PATH}/htdocs/web/js/*.js

# img
ssh -i ${ID_RSA_PATH} user@${SERVER} rm ${APACHE_PATH}/htdocs/web/img/sprite/*
rsync -avz -e ssh ${IMG}/*.png user@${SERVER}:${APACHE_PATH}/htdocs/web/img/sprite/
```