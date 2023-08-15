#!/bin/bash
###
 # @Author       : archer
 # @Date         : 2023-08-15 15:10:35
 # @LastEditors  : archer
 # @Description  : 描述
### 

docker build -t vue-medo-admin  .

 docker run --name vue-medo-admin -d -p 3002:80  -e VG_BASE_URL=http://localhost:8887 vue-medo-admin
