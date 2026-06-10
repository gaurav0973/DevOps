# DevOps = Development + Operations

## 1. Buying a VPS

A **VPS (Virtual Private Server)** provides a remote Linux machine where you can deploy and manage your applications.
Popular VPS providers:
* DigitalOcean
* Hostinger
* AWS EC2
* Google Cloud
* Azure
* Linode

---

## 2. Setting Up an SSH Key Pair

SSH keys allow you to securely connect to your VPS without using a password.

### Generate an SSH Key Pair

Follow the official GitHub guide:

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

### Default SSH Key Location (Windows)

```text
C:\Users\YourUserName\.ssh
```

Common files:

```text
id_rsa         -> Private Key
id_rsa.pub     -> Public Key
```

### View Your Public Key

Open PowerShell:

```Git Bash
cat ~/.ssh/public_key.pub
```

Copy the entire output.

---

## 3. Add Your Public Key to the VPS

Connect to your VPS using the credentials provided by your VPS provider.

### Check Current User

```bash
whoami
```

### View Files

```bash
ls
```

Show hidden files:

```bash
ls -a
```

You should see a `.ssh` directory.

Navigate into it:

```bash
cd ~/.ssh
```
### Add the Public Key

Create or edit the `authorized_keys` file:

```bash
vim authorized_keys
```

Paste the public key copied from your local machine.

Save and exit Vim:

```vim
:wq
```

---

## 4. Connect to the VPS Using SSH

Once the public key has been added to `authorized_keys`, you can connect from your local machine without entering a password.

```bash
ssh username@vps_ip_address
```

### Example

```bash
ssh ubuntu@123.45.67.89
```


## 5. Deploying a Node.js Application

1. Install Node.js and NPM on your VPS.
- https://nodejs.org/en/download
2. git clone
3. npm install
4. npm start
5. security group -> open port 8000

Problem Here
    - The application will stop when terminal is closed
Solution
    - Use process managers to keep the application running in the background
    - Eg: PM2 (https://pm2.keymetrics.io/)
        - install command
        - run application using PM2

## CI/CD
Problem Statement 
    - Every time we make changes to our code, we need to manually deploy it to the VPS
    and run all those git pull, npm install and pm2 restart commands again and again
Solution
    - Use CI/CD tools to automate the deployment process
    - Eg: 
        - GitHub Actions
        - Jenkins
        - GitLab CI/CD
        - CircleCI
        - Travis CI
```YAML
# which branch to trigger the workflow on
name: Deploy Node.js App to ExCloud Server
on:
  push:
    branches:
      - main

# steps 
jobs: 
  deploy: 
    runs-on: ubuntu-latest
    steps: 
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Deploy on ExCloud Server
        uses: appleboy/ssh-action@v1.2.5
        with: 
          host: 210.79.129.202
          username: ubuntu
          key: ${{ secrets.PRIVATE_KEY }}
          script: |
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
            cd /home/ubuntu/DevOps
            git pull 
            npm install
            pm2 delete index || true
            pm2 start index.js --name index

```

Problem with this approach
    - If the applicatio has a lot of services like reddis, auth, kafka then managing all those services using ssh commands will be a nightmare
Solution
    - Using docker to containerasie the application


## Docker
Problem Statement
    - Managing multiple services and their dependencies on the VPS can be complex and error-prone.
Solution
    - Docker allows you to containerize your application and its dependencies, making it easier to deploy and manage on the VPS.
    - You can use Docker Compose to define and run multi-container applications, simplifying the management of services like Redis, Kafka, etc. 



## Gaurav Maurya , what is your name 

