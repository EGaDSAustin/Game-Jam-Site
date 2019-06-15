# Get all the stuff you need by running this script
# Run with sudo
echo "!UPDATE apt";
apt update;

echo "!INSTALLING node";
apt install nodejs;
nodejs --version;
apt install npm;
apt-get install -y mongodb;

# dont remember if i did that or this:
# curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

echo "!INSTALLING ruby and travis";
apt install -y ruby ruby-dev;
gem install travis;

# Get heroku
echo "!INSTALLING heroku";
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh;

npm install --save-dev;
