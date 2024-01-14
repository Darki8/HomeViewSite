# HomeViewSite

## Installation
To install this website on Ubutnu 20.4

```bash
sudo apt update && sudo apt upgrade
```

cd into the html folder
```bash
cd /var/www/html
```

Install NVM on Ubuntu
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

So now restart Terminal
```bash
source ~/.bashrc
```

Now install NodeJS
```bash
nvm install 20.11.0
```

just to be sure do this
```bash
sudo apt-get install -y nodejs
```

Now create a crontab to automaticaly start app.js
First do
```bash
crontab -e
```
Choose your preferd editor then add following line into the file
```bash
@reboot /home/test/.nvm/versions/node/v20.11.0/bin/node /var/www/html/app.js 
```

then do this command to install all dependencies
```bash
sudo npm init
```