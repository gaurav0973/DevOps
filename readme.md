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

---

## Useful Commands

### Check Current User

```bash
whoami
```

### Show Current Directory

```bash
pwd
```

### List Files

```bash
ls
```

### List All Files (Including Hidden)

```bash
ls -a
```

### Navigate to Home Directory

```bash
cd ~
```

---

## SSH Authentication Flow

```text
Local Machine
      │
      │ (Private Key)
      ▼
SSH Client
      │
      ▼
VPS Server
      │
      │ Checks Public Key
      ▼
authorized_keys
      │
      ▼
Access Granted ✅
```
