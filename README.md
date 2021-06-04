# Protokode

This page will help you in the deployment of our Water Sort puzzle. You will need to use linux for the level maker, so if you are using windows, try using a virtual machine, or wsl2 is a perfect alternative to virtual machines. Prefer a debian based distro (like ubuntu) for this project if you want to be sure that everything will work.

## Website

under **debian** based distros:

```shell
    sudo apt install nodejs npm
```

if you use an other distro, i'm sure you will be able to find help on the internet to install nodejs and npm.

if you are on **windows**, go ahead and install nodejs from their website, i'm pretty sure npm comes with it and the usecase is the same through powershell. Try to avoid cmd.exe since it doesn't have the same aliases.

Now that you installed the required software, you cant clone the repo wherever you want it to run. Make sure to clone the repo somewhere where the user that will run the website can write. If not, some features will not work properly.

```shell
    git clone https://github.com/theoprz/Protokode
```

Git can ask you your github username and password, if not it is because you already setup your ssh key.

Once you have cloned the repo, you can go ahead and install all the dependencies needed for the website to run:

```shell
    cd Protokode/Web/
    npm install
```

When that is done, you can just run the website:

```shell
    npm start
```

you can now connect to [localhost:3000](localhost:3000) and access the entire website.

## Level maker

First you will need the compiler and the library for transfering data into a json format:

```shell
    sudo apt install build-essential libjson-c-dev
```

You now have access to gcc (gnu C compiler) and json-c, so clone the repo (somewhere where the user have write access):

```shell
    git clone https://github.com/theoprz/Protokode
```

You can now navigate to the source code to compile it and execute it.

```shell
    cd Protokode/C/
    gcc Source.c -o LevelMaker -ljson-c
    ./LevelMaker
```

Now you can go through the instructions given by the program. When it is done, it saves the level data to "map.json" which you can cut and paste in the website for playing the level.

**Do not delete pattern.json as it is needed for the program to save the data**