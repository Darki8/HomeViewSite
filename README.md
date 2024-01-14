# HomeViewSite
First of i am not as much Active on Github so dont expect any Direct Support but i'll try to help as much as possible :)
I am not responsible for any Spelling mistakes. I Hope you can still read the Instructions.

## Installation
All of this was testen on Ubuntu Server

To Install this follow all of these following commands
```bash
sudo apt update && sudo apt upgrade
```

### Install Mysql Server
To install MySQL, run the following command from a terminal prompt:
```bash
sudo apt install mysql-server
```

Once the installation is complete, the MySQL server should be started automatically. You can quickly check its current status via systemd:
```bash
sudo service mysql status
```

If the server is not running correctly, you can type the following command to start it:
```bash
sudo service mysql restart
```

Bravo! now you can acces your Databse by doing:
```bash
sudo mysql
```

Now to change the root password of the root user do following command:
```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Root1234';
```

REMEBER After changing password you can now only login like this:
```bash
mysql -u root -p
```


### Install Webserver
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

The most important Step download the files from the Github:
```bash
sudo git clone https://github.com/Darki8/HomeViewSite.git /var/www/html/ 
```

## IMPORTANT
In the Files: index... and app.js  remember that there is an IP set of the Server. Change that to your liking
And there is a user (my Example Root) and a password to acces the database.
To change that 


Then do this command to install all dependencies
```bash
sudo npm init
```

### Automation
Now install pm2 to automaticaly start app.js
First do
```bash
npm install -g pm2
```
Start your Node.js application using pm2:
```bash
pm2 start app.js --name WebserverAppJS 
```
Then ofcourse Save
```bash
pm2 save
```
Now Generate a Startup Script:
```bash
pm2 startup
```

Follow the instructions provided by pm2. It will show you a command similar to:
```bash
sudo env PATH=$PATH:/home/test/.nvm/versions/node/v20.11.0/bin /home/test/.nvm/versions/node/v20.11.0/lib/node_modules/pm2/bin/pm2 startup systemd -u test --hp /home/test
```

And again save 
```bash
pm2 save
```

After all of that reboot the server and Test it :)
go into your browser and go to the IP addres of your server


