cmake_minimum_required(VERSION 3.19)
project(Protokode C)

set(CMAKE_C_STANDARD 11)

include_directories(.)

add_executable(Protokode
        main.c
        main.h)
